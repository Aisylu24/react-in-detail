import React, {useState} from 'react'
import {action} from '@storybook/addon-actions'
import exp from "constants";
import {Select} from "./Select";

export default {
    title: 'Select',
    component: Select,
};

let callback = action('clicked')



export const WithValue = () => {
    return <Select  value={'2'}
                    onChange={callback}
                    items={[
                        {title: "LA", value: 1},
                        {title: "NY", value: 2},
                        {title: "SF", value: 3}]}/> }


export const WithoutExample = () => {
    return <Select onChange={callback}
                    items={[
                        {title: "LA", value: 1},
                        {title: "NY", value: 2},
                        {title: "SF", value: 3}]}/> }



export const SelectMode = () => {
    const [value, setValue] = useState(undefined)

    return <Select  value={value}
                   onChange={setValue}
                   items={[{title: 'select city'},
                       {title: "LA", ItemValue: 1},
                       {title: "NY", ItemValue: 2},
                       {title: "SF", ItemValue: 3}]}/>
}