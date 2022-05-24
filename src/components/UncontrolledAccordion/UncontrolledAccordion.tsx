import React, {useReducer} from "react";
import {reducer, TOGGLE_CONSTANT} from "./Reducer";


type AccPropsType={
    title: string
}

export function UncontrolledAccordion(props: AccPropsType) {

    let [state, dispatch] = useReducer(reducer, {collapsed: false})

    return <>
        <AccTitle name={props.title} onClick={() => (dispatch({type: TOGGLE_CONSTANT}))}/>
        {!state.collapsed && <AccBody/>}
    </>
}

type AccTitleType = {
    name: string
    onClick: () => void
}

function AccTitle(props: AccTitleType) {
    console.log("AccT")
    return <h3 onClick={() => props.onClick()}>{props.name}</h3>
}


function AccBody() {
    console.log("AccB")
    return <ul>
        <li>hard</li>
        <li>work</li>
    </ul>
}