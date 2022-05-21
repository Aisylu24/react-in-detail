import React, {useState} from "react";
import s from "./Select.module.css"

type ItemType = {
    title: string
    value?: any
}

type PropsType = {
    value: any
    onChange: (value: any) => void
    items: ItemType[]
}

export function Select(props: PropsType) {

    const[active, setActive] = useState<boolean>(false)

    const toggleItems = ()=> {
        setActive(!active)
    }

    const selectedItem = props.items.find(item => item.value)

    return (
        <>
            <select>
                <option value="">LA</option>
                <option value="">SF</option>
                <option value="">NY</option>
            </select>

            <div className={s.select  + ' ' + (active? s.active : "")}>
                <h3 onClick={toggleItems}>{selectedItem && selectedItem.title}</h3>
                    <div className={s.items}>
                    {props.items.map(item => <div key={item.value}>{item.title}</div>)}
                </div>


            </div>
        </>
    )
}


