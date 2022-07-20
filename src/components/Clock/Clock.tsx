import React, {useEffect, useState} from 'react';
import {DigitalClockView} from "./DigitalClockView";
import {AnalogClockView} from "./AnalogClockView";

type PropsType={
    mode: 'digital' | 'analog'
}

const Clock = (props:PropsType) => {
    const [date,setDate] = useState(new Date())

    useEffect(()=> {
        const intervalId = setInterval(()=> {
            setDate(new Date())
        },1000)
        return ()=> {
            clearInterval(intervalId)
        }
    },[])

    let view;
    switch(props.mode) {
        case "analog":
            view= <AnalogClockView date={date}/>
            break
        case "digital":
        default:
            view = <DigitalClockView date={date}/>
    }

    return (
        <div>
            {view}
        </div>
    );
};

export default Clock;

export type ClockViewPropsType = {
date: Date
}

