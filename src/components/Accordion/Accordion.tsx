import React from "react";


type AccPropsType={
    title: string
    collapsed: boolean
    setAccordion: () => void
}

export function Accordion(props:AccPropsType) {
        return <>
            <AccTitle name={props.title}
                      onChange={props.setAccordion}/>
                {!props.collapsed && <AccBody/>}
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
function AccBody(){
    console.log("AccB")
    return <ul>
            <li>hard</li>
            <li>work</li>
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
