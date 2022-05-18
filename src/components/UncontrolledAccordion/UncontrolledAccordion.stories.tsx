import React, {useState} from 'react'
import { action } from '@storybook/addon-actions'
import exp from "constants";
import {UncontrolledAccordion} from "./UncontrolledAccordion";

export default {
    title: 'UncontrolledAccordion',
    component: UncontrolledAccordion,
};

let callback = action('clicked')


export const ModeChanging = () => {
return <UncontrolledAccordion title={'Users'}/>
}