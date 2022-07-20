import React, {useEffect, useState} from "react";
import {ClockViewPropsType} from "./Clock";
import './AnalogClockView.css'

export const AnalogClockView: React.FC<ClockViewPropsType> = ({date}) => {
    const [secondRatio, setSecondRatio] = useState(0);
    const [minuteRatio, setMinuteRatio] = useState(0);
    const [hourRatio, setHourRatio] = useState(0);

    useEffect(() => {
        let secondRatio = date.getSeconds() / 60;
        let minuteRatio = (secondRatio + date.getMinutes()) / 60;
        let hourRatio = (minuteRatio + date.getHours()) / 12;
        setSecondRatio(secondRatio);
        setMinuteRatio(minuteRatio);
        setHourRatio(hourRatio);
    }, [date]);

    const hourStyle = {
        transform: `translate(-50%) rotate(${hourRatio * 360}deg)`
    }

    const minuteStyle = {
        transform: `translate(-50%) rotate(${minuteRatio * 360}deg)`
    }

    const secondStyle = {
        transform: `translate(-50%) rotate(${secondRatio * 360}deg)`
    }
    return (
        <div className="clock">
            <div
                className="hand hour"
                style={hourStyle}
            ></div>
            <div
                className="hand minute"
                style={minuteStyle}
            ></div>
            <div
                className="hand second"
                style={secondStyle}
            ></div>

            <div className="number number1">
                <div>1</div>
            </div>
            <div className="number number2">
                <div>2</div>
            </div>
            <div className="number number3">
                <div>3</div>
            </div>
            <div className="number number4">
                <div>4</div>
            </div>
            <div className="number number5">
                <div>5</div>
            </div>
            <div className="number number6">
                <div>6</div>
            </div>
            <div className="number number7">
                <div>7</div>
            </div>
            <div className="number number8">
                <div>8</div>
            </div>
            <div className="number number9">
                <div>9</div>
            </div>
            <div className="number number10">
                <div>10</div>
            </div>
            <div className="number number11">
                <div>11</div>
            </div>
            <div className="number number12">
                <div>12</div>
            </div>
        </div>
    );
}