import React from "react";



type ItemType ={
    title: string
    value:any
}
type AccPropsType={
    title: string
    collapsed: boolean
    setAccordion: () => void
    items: Array<ItemType>
    onClick: (value:any) => void
}

export function Accordion(props:AccPropsType) {
        return <>
            <AccTitle name={props.title}
                      onChange={props.setAccordion}/>
                {!props.collapsed && <AccBody  items={props.items} onClick={props.onClick}/>}
            </>
    }

type AccTitleType = {
    name:string
    onChange: () => void
}

function AccTitle(props: AccTitleType){
    console.log("AccT")
    return <h3 onClick={(e)=>props.onChange()}>{props.name}</h3>
    }


type AccBodyPropsType = {
    items: Array<ItemType>
    onClick: (value:any) => void
}

function AccBody(props: AccBodyPropsType){
    console.log("AccB")
    return <ul>
        {props.items.map((el,i)=> <li onClick={()=>props.onClick(el.value)} key={i}>{el.title}</li>)}
        </ul>
    }


// export function Accordion(props:AccPropsType) {
//     if (props.collapsed) {
//     return(
//         <><AccTitle name={props.title}/></> )}
//     else {
//         return (
//         <><AccTitle name={props.title}/>
//         <AccBody/>  </>)
//        }}
