import React, {useState} from 'react'
import { action } from '@storybook/addon-actions'
import OnOff from './OnOff'
import exp from "constants";

export default {
    title: 'OnOff',
    component: OnOff,
};



export const OnMode = () => <OnOff onSwitch={true} setOnSwitch={action('clicked')}/>
export const OffMode = () => <OnOff onSwitch={false} setOnSwitch={action('clicked')}/>

export const ModeChanging = () => {
    const[value, setValue] = useState<boolean>(true)

return <OnOff onSwitch={value} setOnSwitch={setValue}/>
}