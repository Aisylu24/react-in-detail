import React, {useState} from 'react'
import { action } from '@storybook/addon-actions'
import {Rating, RatingValueType} from './Rating'
import exp from "constants";

export default {
    title: 'Rating stories',
    component: Rating,
};

let callback = action('clicked')

export const EmptyStars = () => <Rating value={0} onClick={callback}/>
export const Rating1 = () => <Rating value={1} onClick={callback}/>
export const Rating2 = () => <Rating value={2} onClick={callback}/>
export const Rating3 = () => <Rating value={3} onClick={callback}/>
export const Rating4 = () => <Rating value={4} onClick={callback}/>
export const Rating5 = () => <Rating value={5} onClick={callback}/>

export const RatingChanging = () => {
    const[rating, setRating] = useState<RatingValueType>(3)

return <Rating value={rating} onClick={setRating}/>
}