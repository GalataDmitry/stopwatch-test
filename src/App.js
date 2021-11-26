import React from 'react'
import Stop from "./components/stop"
// import {of, interval, concat, Subject} from "rxjs"
// import {
//     takeWhile,
//     takeUntil,
//     scan,
//     startWith,
//     repeatWhen,
//     share,
//     filter
// } from "rxjs/operators";
//
// const countdown$ = interval(1000)
//     .pipe(
//         startWith(5, 5),
//         scan(time => time - 1),
//         takeWhile(time => time > 0)
//     )
//     .pipe(share())
//
// const action$ = new Subject()
// const snooze$ = action$.pipe(filter(action => action === 'snooze'))
// const dismiss$ = action$.pipe(filter(action => action === 'dismiss'))
//
//
// const shoooooze$ = concat(countdown$, of('Убучий Rx')).pipe(
//     repeatWhen(() => snooze$)
// )
//
// const observable$ = concat(shoooooze$.pipe(takeUntil(dismiss$)), of('добрый вечер'))


function App() {

    // const [state, setState] = useState(0)
    //
    // useEffect(() => {
    //     const sub = observable$.subscribe(setState)
    //     return () => sub.unsubscribe()
    // }, [])

    return (
        <>
            <div>
                {/*{state}*/}
                {/*<br/>*/}
                {/*<button onClick={() => action$.next('snooze')}>button</button>*/}
                {/*<button onClick={() => action$.next('dismiss')}>dismiss</button>*/}
            </div>
            <Stop/>
        </>
    );
}

export default App;
