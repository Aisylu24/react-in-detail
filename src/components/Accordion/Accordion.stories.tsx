import React, {useState} from 'react'
import { action } from '@storybook/addon-actions'
import exp from "constants";
import {Accordion} from "./Accordion";

export default {
    title: 'Accordion',
    component: Accordion,
};

let callback = action('clicked')
let onClickCallback = action('some item was clicked')

export const MenuCollapsedMode = () => <Accordion collapsed={true} setAccordion={callback} title={'Menu'} items={[]} onClick={onClickCallback}/>
export const UsersUncollapsedMode = () => <Accordion collapsed={false} setAccordion={callback} title={'Users'} items={[{title:"ai", value:1}, {title:"liza", value:2},{title:"di", value:3}]} onClick={onClickCallback}/>

export const ModeChanging = () => {
    const[value, setValue] = useState<boolean>(true)

return <Accordion collapsed={value} setAccordion={()=>setValue(!value)}
                  title={'Users'}  items={[{title:"ai", value:1}, {title:"liza", value:2},{title:"di", value:3}]}
                  onClick={onClickCallback}/>
}