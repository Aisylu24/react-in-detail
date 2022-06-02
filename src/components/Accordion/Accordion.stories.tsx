import React, {useState} from 'react'
import { action } from '@storybook/addon-actions'
import {Accordion} from "./Accordion";

export default {
    title: 'Accordion',
    component: Accordion,
};

let callback = action('clicked')
let onClickCallback = action('some item was clicked')

export const MenuCollapsedMode = () => <Accordion collapsed={true} setAccordion={callback} title={'Menu'} items={[]} onClick={onClickCallback}/>
export const UsersUncollapsedMode = () => <Accordion collapsed={false}
                                                     setAccordion={callback}
                                                     title={'Users'}
                                                     items={[{title:"ai", value:1}, {title:"liza", value:2},{title:"di", value:3}]} onClick={onClickCallback}/>


const AccordionMemo = React.memo(Accordion)

export const ModeChanging = () => {
    const[value, setValue] = useState<boolean>(true)

return <AccordionMemo collapsed={value} setAccordion={()=>setValue(!value)}
                  title={'Users'}  items={[{title:"ai", value:1}, {title:"liza", value:2},{title:"di", value:3}]}
                  onClick={onClickCallback}/>
}