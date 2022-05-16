import React from 'react';
import s from './OnOff.module.css'

type PropsType = {
    onSwitch: boolean
    setOnSwitch: (onSwitch: boolean) => void
}

const OnOff = (props: PropsType) => {


    // const onStyle = s.white + ' ' + (props.value ? s.on : '')
    // const offStyle = s.white + ' ' + (props.value ? '' : s.off)
    // const circle = s.circle + ' ' + (props.value ? s.on : s.off)

    const onStyle = s.white + ' ' + (props.onSwitch ? s.on : '')
    const offStyle = s.white + ' ' + (props.onSwitch ? '' : s.off)
    const circle = s.circle + ' ' + (props.onSwitch ? s.on : s.off)


    return (
        <div className={s.onOff}>
            <span className={onStyle} onClick={() => {
                props.setOnSwitch(true)
            }}>On</span>
            <span className={offStyle} onClick={() => {
                props.setOnSwitch(false)
            }}>Off</span>
            <span className={circle}></span>
        </div>
    );
};

export default OnOff;