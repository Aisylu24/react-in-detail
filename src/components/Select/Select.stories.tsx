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

    const [value, setValue] = useState('1')

    return <Select value={value}
                   onChange={setValue}
                   items={[
                       {title: "LA", value: '1'},
                       {title: "NY", value: '2'},
                       {title: "SF", value: '3'}]}/>
}


export const WithoutValue = () => {
    const [value, setValue] = useState(null)
    return <Select
        value={value}
        onChange={setValue}
        items={[
            {title: "LA", value: '1'},
            {title: "NY", value: '2'},
            {title: "SF", value: '3'}]}/>
}



