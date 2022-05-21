import React, {useState, KeyboardEvent, useEffect} from "react";
import s from "./Select.module.css"

type ItemType = {
    title: string
    value: any
}

type PropsType = {
    value: any
    onChange: (value: any) => void
    items: ItemType[]
}

export function Select(props: PropsType) {

    const [active, setActive] = useState<boolean>(false)
    const [hoveredItemValue, setHover] = useState<boolean>(props.value)

    const toggleItems = () => {
        setActive(!active)
    }

    let selectedItem = props.items.find(item => item.value === props.value)
    const hoveredItem = props.items.find(item => item.value === hoveredItemValue)

    useEffect(() => {
        setHover(props.value)
    }, [props.value])

    const onItemClick = (value: any) => {
        props.onChange(value)
        toggleItems()
    }

    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        console.log(e)
        if (e.key === "ArrowDown" || e.key === "ArrowUp") {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredItemValue) {
                    const pretendentElement = e.key === "ArrowDown"
                        ? props.items[i + 1]
                        : props.items[i - 1]
                    if (pretendentElement) {
                        props.onChange(pretendentElement.value)
                        break
                    }
                }
            }
            if(!selectedItem) {
                props.onChange(props.items[0].value)
            }
        }
        if (e.key === "Enter" || e.key === "Escape") {
            setActive(false)
        }
    }


    return (
        <>
            <div className={s.select} onKeyUp={onKeyUp} tabIndex={0}>
                <span className={s.main} onClick={toggleItems}>{selectedItem && selectedItem.title}</span>
                {
                    active &&
                    <div className={s.items}>
                        {props.items.map(item => <div
                            onMouseEnter={() => setHover(item.value)}
                            className={s.item + ' ' + (hoveredItem === item ? s.selected : '')}
                            key={item.value}
                            onClick={() => onItemClick(item.value)}
                        >
                            {item.title}
                        </div>)}
                    </div>
                }
            </div>
        </>
    )
}

