import React, {useState} from 'react'
import { action } from '@storybook/addon-actions'
import OnOff from './OnOff'

export default {
    title: 'OnOff',
    component: OnOff,
};



export const OnMode = () => <OnOff onSwitch={true} setOnSwitch={action('clicked')}/>
export const OffMode = () => <OnOff onSwitch={false} setOnSwitch={action('clicked')}/>



const OnOffMemo = React.memo(OnOff)

export const ModeChanging = () => {
    const[value, setValue] = useState<boolean>(true)

return <OnOffMemo onSwitch={value} setOnSwitch={setValue}/>
}