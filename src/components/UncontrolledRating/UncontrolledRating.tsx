import React, {useState} from "react";

type RatingProps={
    value: 0 | 1 | 2 | 3 | 4 | 5
}

export function UncontrolledRating(props:RatingProps) {

    let [value, setValue] = useState(0)

    const setValueHandler = (value: number) => {
        setValue(value)
    }

    return (
        <div>
            <Star selected={value > 0} callBack={()=>setValueHandler(1)}/>
            <Star selected={value > 1} callBack={()=>setValueHandler(2)}/>
            <Star selected={value > 2} callBack={()=>setValueHandler(3)}/>
            <Star selected={value > 3} callBack={()=>setValueHandler(4)}/>
            <Star selected={value > 4} callBack={()=>setValueHandler(5)}/>

            {/*<Star selected={value > 4} callBack={()=>setValue(5)}/>*/}

        </div>
    )
}


type StarPropsType={
    selected: boolean
    callBack: ()=> void
}

function Star(props:  StarPropsType) {
  // return props.selected ? <span onClick={props.callBack}><b>star</b></span> : <span>star </span>
    return (
    <span onClick={props.callBack}>
        {props.selected ? <b>star </b> : 'star '}
    </span>
    )
}


// type StarPropsType={
//     selected:boolean
// }
//
// function Star(props:  StarPropsType) {
//     console.log("planet")
//     if (props.selected === true) {
//         return <span><b>star </b></span>
//     } else {
//         return <span>star </span>
//
//     }
//
// }

//     if (props.value === 1) {
//         return (
//             <div>
//                 <Star selected={true}/>
//                 <Star selected={false}/>
//                 <Star selected={false}/>
//                 <Star selected={false}/>
//                 <Star selected={false}/>
//             </div>)
//     }
//     if (props.value === 2) {
//         return (
//             <div>
//                 <Star selected={true}/>
//                 <Star selected={true}/>
//                 <Star selected={false}/>
//                 <Star selected={false}/>
//                 <Star selected={false}/>
//             </div>)
//     }
//     if (props.value === 3) {
//         return (
//             <div>
//                 <Star selected={true}/>
//                 <Star selected={true}/>
//                 <Star selected={true}/>
//                 <Star selected={false}/>
//                 <Star selected={false}/>
//             </div>)
//     }
//     if (props.value === 4) {
//         return (
//             <div>
//                 <Star selected={true}/>
//                 <Star selected={true}/>
//                 <Star selected={true}/>
//                 <Star selected={true}/>
//                 <Star selected={false}/>
//             </div>)
//     }
//     if (props.value === 5) {
//         return (
//             <div>
//                 <Star selected={true}/>
//                 <Star selected={true}/>
//                 <Star selected={true}/>
//                 <Star selected={true}/>
//                 <Star selected={true}/>
//             </div>)
//     }
//
//     return (
//         <div>
//             <Star selected={false}/>
//             <Star selected={false}/>
//             <Star selected={false}/>
//             <Star selected={false}/>
//             <Star selected={false}/>
//         </div>)
// }

