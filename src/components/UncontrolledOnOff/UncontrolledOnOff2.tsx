import React, {useState} from 'react';
import s from './UncontrolledOnOff.module.css'

type PropsType = {
 //   value: boolean
    onChange: (on:boolean) => void
    defaultOn?: boolean
}

const UncontrolledOnOff = (props: PropsType) => {

    let [on, setOn] = useState(props.defaultOn ? props.defaultOn : false)

     // const onStyle = s.white + ' ' + (props.value ? s.on : '')
     // const offStyle = s.white + ' ' + (props.value ? '' : s.off)
     // const circle = s.circle + ' ' + (props.value ? s.on : s.off)

    const onStyle = s.white + ' ' + (on ? s.on : '')
    const offStyle = s.white + ' ' + (on ? '' : s.off)
    const circle = s.circle + ' ' + (on ? s.on : s.off)


    const onClicked = ()=> {
        setOn(true)
    props.onChange(true)}

    const offClicked = ()=> {
        setOn(false)
        props.onChange(false)}


    return (
        <div className={s.onOff}>
            <span className={onStyle} onClick={onClicked}>On</span>
            <span className={offStyle} onClick={offClicked}>Off</span>
            <span className={circle}></span>
        </div>
    );
};

export default UncontrolledOnOff;