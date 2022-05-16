import React, {useState} from 'react'
import { action } from '@storybook/addon-actions'
import exp from "constants";
import {Accordion} from "./Accordion";

export default {
    title: 'Accordion',
    component: Accordion,
};

let callback = action('clicked')

export const MenuCollapsedMode = () => <Accordion collapsed={true} setAccordion={callback} title={'Menu'}/>
export const UsersUncollapsedMode = () => <Accordion collapsed={false} setAccordion={callback} title={'Users'}/>

export const ModeChanging = () => {
    const[value, setValue] = useState<boolean>(true)

return <Accordion collapsed={value} setAccordion={()=>setValue(!value)} title={'Users'}/>
}