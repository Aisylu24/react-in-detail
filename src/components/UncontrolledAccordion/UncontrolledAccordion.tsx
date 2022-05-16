import React, {useState} from "react";


type AccPropsType={
    title: string
   // collapsed: boolean
}

export function UncontrolledAccordion(props:AccPropsType) {

    let [collapsed, setCol] = useState(false)

        return <>
            <AccTitle name={props.title} onClick={()=>(setCol(!collapsed))}/>
            {/*<button onClick={()=>(setCol(!collapsed))}>Свернуть</button>*/}
                { !collapsed && <AccBody/>}
            </>
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


type AccTitleType = {
    name:string
    onClick: () => void
}

function AccTitle(props: AccTitleType){
    console.log("AccT")
    return <h3 onClick={()=>props.onClick()}>{props.name}</h3>
    }


function AccBody(){
    console.log("AccB")
    return <ul>
            <li>hard</li>
            <li>work</li>
        </ul>
    }