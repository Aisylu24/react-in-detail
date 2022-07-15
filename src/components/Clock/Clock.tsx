import React, {useEffect, useState} from 'react';

const Clock = () => {
    const [date,setDate] = useState(new Date())


    const getTimeWithTwoNumbers = (num: number) => num < 10 ? '0' + num : num

    const secString = getTimeWithTwoNumbers(date.getSeconds())
    const minString= getTimeWithTwoNumbers(date.getMinutes())
    const hoursString= getTimeWithTwoNumbers(date.getHours())

    useEffect(()=> {
        const intervalId = setInterval(()=> {
            setDate(new Date())
        },1000)
        return ()=> {
            clearInterval(intervalId)
        }
    },[])
    return (
        <div>
            <span>{hoursString}</span>
            <span>{minString}</span>
            <span>{secString}</span>
        </div>
    );
};

export default Clock;