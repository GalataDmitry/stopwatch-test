import React, {useState} from 'react'
import Watch from './watch'

import {interval} from 'rxjs'
import {map} from 'rxjs/operators'

const Stop = () => {

    const [timer, setTimer] = useState(0)

    const [transition, setTransition] = useState(0)
    const [subscriber, setSubscriber] = useState('')
    const [dblClick, setDblClick] = useState(true)

    const onStartStop = () => {

        if (!subscriber) {

            const startTimer = interval(1000).pipe(map(value => value + 1))
                .subscribe((value) => setTimer(value + transition))

            setSubscriber(startTimer)

        } else {

            subscriber.unsubscribe()
            setTimer(0)
            setTransition(0)
            setSubscriber('')
        }
    }

    const onWait = () => {

        if (dblClick) {

            setDblClick(false)

            const dbl = setTimeout(() => {
                setDblClick(true)

                clearTimeout(dbl)

            }, 300)

        } else if (subscriber) {

            subscriber.unsubscribe()
            setTransition(timer)
            setSubscriber('')
        }
    }

    const onReset = () => {

        if (subscriber) {
            subscriber.unsubscribe()
        }

        if (timer !== 0) {
            const startTimer = interval(1000)
                .subscribe((value) => setTimer(value))

            setSubscriber(startTimer)
        }
    }

    return (
        <div style={{textAlign: 'center'}}>
            <Watch timer={timer}/>
            <hr/>
            <button onClick={onReset} style={{marginRight: '10px'}}>reset</button>
            <button onClick={onStartStop} style={{marginRight: '10px'}}>start/stop</button>
            <button onClick={onWait}>wait</button>
        </div>
    )
}

export default Stop