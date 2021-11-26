import React, {useState, useEffect} from 'react'

const Watch = ({timer}) => {

    const [seconds, setSeconds] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [hours, setHours] = useState(0)

    useEffect(() => {

        let secTransform = timer % 60
        let minTransform = Math.floor(timer / 60 % 60)
        let houTransform = Math.floor(timer / 3600)

        setSeconds((seconds < 10) ? '0' + secTransform : secTransform)
        setMinutes((minutes < 10) ? '0' + minTransform : minTransform)
        setHours((hours < 10) ? '0' + houTransform : houTransform)

    }, [timer, seconds, minutes, hours])

    return (
        <>
            H:{hours} |
            M:{minutes} |
            S:{seconds}
        </>
    )
}

export default Watch