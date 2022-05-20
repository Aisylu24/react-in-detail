import React from "react";

type ItemType ={
    title: string
    value:any
}

type PropsType = {
    value: any
    onChange: (value: any) => void
    items: ItemType[]
}

export function Select(props: PropsType) {


    return (
        <div>
            <div>{}</div>
            {props.items.map(el=> <div>{el.title}</div>)}
        </div>
    )
}

