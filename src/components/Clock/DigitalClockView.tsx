import React from "react";
import {ClockViewPropsType} from "./Clock";

export const DigitalClockView: React.FC<ClockViewPropsType> = ({date}) => {
    const getTimeWithTwoNumbers = (num: number) => num < 10 ? '0' + num : num

    const secString = getTimeWithTwoNumbers(date.getSeconds())
    const minString = getTimeWithTwoNumbers(date.getMinutes())
    const hoursString = getTimeWithTwoNumbers(date.getHours())
    return <>
        <span>{hoursString}</span>
        <span>{minString}</span>
        <span>{secString}</span>
    </>
}