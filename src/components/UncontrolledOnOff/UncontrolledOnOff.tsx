import React, {useState} from 'react';
import s from './UncontrolledOnOff.module.css'

type PropsType = {
   value: boolean
}

const UncontrolledOnOff = (props: PropsType) => {

    let [on, setOn] = useState(false)

     // const onStyle = s.white + ' ' + (props.value ? s.on : '')
     // const offStyle = s.white + ' ' + (props.value ? '' : s.off)
     // const circle = s.circle + ' ' + (props.value ? s.on : s.off)

    const onStyle = s.white + ' ' + (on ? s.on : '')
    const offStyle = s.white + ' ' + (on ? '' : s.off)
    const circle = s.circle + ' ' + (on ? s.on : s.off)


    return (
        <div className={s.onOff}>
            <span className={onStyle} onClick={()=>{setOn(true)}}>On</span>
            <span className={offStyle} onClick={()=>{setOn(false)}}>Off</span>
            <span className={circle}></span>
        </div>
    );
};

export default UncontrolledOnOff;