import React, {useState} from 'react'
import {action} from '@storybook/addon-actions'
import exp from "constants";
import {Select} from "./Select";

export default {
    title: 'Select',
    component: Select,
};

let callback = action('clicked')


export const SelectMode = () => {
    const [value, setValue] = useState(undefined)

    return <Select  value={value}
                   onChange={callback}
                    setValue={setValue}
                   items={[{title: 'select city'},
                       {title: "LA", ItemValue: 1},
                       {title: "NY", ItemValue: 2},
                       {title: "SF", ItemValue: 3}]}/>
}