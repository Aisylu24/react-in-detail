import React from 'react'
import { action } from '@storybook/addon-actions'
import UncontrolledOnOff2 from './UncontrolledOnOff2'
import exp from "constants";

export default {
    title: 'UncontrolledOnOff2',
    component: UncontrolledOnOff2,
};


let callback = action('clicked')

export const OnMode = () => <UncontrolledOnOff2 defaultOn={true} onChange={callback}/>
export const OffMode = () => <UncontrolledOnOff2 defaultOn={false} onChange={callback}/>

export const ModeChanging = () => {
return <UncontrolledOnOff2 onChange={callback}/>
}