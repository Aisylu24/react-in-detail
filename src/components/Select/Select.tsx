import React, {useState} from "react";

type ItemType ={
    title: string
    ItemValue?:any
}

type PropsType = {
    value: any
    onChange: (value: any) => void
    items: ItemType[]
}

export function Select(props: PropsType) {

    const[open, setOpen] = useState<boolean>(false)

 const onClickHandler = (elTitle:string) => {
     props.onChange(elTitle)
     setOpen(!open)
 }
    return (
        <div>
            <div key={props.value} onClick={()=>setOpen(!open)}>{props.value}</div>
            {!open && props.items.map(el=>
                <div key={el.ItemValue} onClick={()=>onClickHandler(el.title)}>
                    {el.title}
                </div>)}
        </div>
    )
}

