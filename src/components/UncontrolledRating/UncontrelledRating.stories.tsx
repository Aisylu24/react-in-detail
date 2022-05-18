import React, {useState} from 'react'
import { action } from '@storybook/addon-actions'
import {Rating, RatingValueType} from './Rating'
import exp from "constants";
import UncontrolledOnOff from "../UncontrolledOnOff/UncontrolledOnOff2";
import {UncontrolledRating} from "./UncontrolledRating";


export default {
    title: 'UncontrolledRating',
    component: UncontrolledRating,
};

let callback = action('rating changed inside component')

export const EmptyStars = () => <UncontrolledRating defaultValue={0} onClick={callback}/>
export const Rating1 = () => <UncontrolledRating defaultValue={1} onClick={callback}/>
export const Rating2 = () => <UncontrolledRating defaultValue={2} onClick={callback}/>
export const Rating3 = () => <UncontrolledRating defaultValue={3} onClick={callback}/>
export const Rating4 = () => <UncontrolledRating defaultValue={4} onClick={callback}/>
export const Rating5 = () => <UncontrolledRating defaultValue={5} onClick={callback}/>

export const RatingChanging = () => {
    const[rating, setRating] = useState<RatingValueType>(3)

return <UncontrolledRating value={rating} onClick={setRating}/>
}