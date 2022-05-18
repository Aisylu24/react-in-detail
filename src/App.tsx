import React, {useState} from 'react';
import './App.css';
import {Header} from "./Header";
import {Body} from "./Body";
import {Footer} from "./Footer";
import {Accordion} from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import UncontrolledOnOff from "./components/UncontrolledOnOff/UncontrolledOnOff";
import UncontrolledOnOff2 from "./components/UncontrolledOnOff/UncontrolledOnOff2";

function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)

    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)

    let [onSwitch, setOnSwitch] = useState<boolean>(false)

    // const setAccordion = ()=> {
    //     setAccordionCollapsed(!accordionCollapsed)}


    return (
        <div>

            <UncontrolledOnOff2 onChange={setOnSwitch} />

            <Rating value={ratingValue} onClick={setRatingValue}/>

            <Accordion title={"One"} collapsed={accordionCollapsed}
                       setAccordion={()=>setAccordionCollapsed(!accordionCollapsed)}/>

            {/*<Accordion title={"One"} collapsed={accordionCollapsed}*/}
            {/*     setAccordion={setAccordion}/>*/}

            <OnOff onSwitch={onSwitch} setOnSwitch={setOnSwitch}/>

            <UncontrolledRating value={1}/>

            <UncontrolledAccordion title={"two"}/>

            <PageTitle title={'Hello'}/>
            <Header title={'Header'}/>
            <Body titleForBody={'BODY'}/>
            <Footer titleFooter={'NEW FOOTER'}/>


            <UncontrolledOnOff value={false}/>


        </div>

    );
}

type PagePropsType = { title: string }


function PageTitle(props: PagePropsType) {
    return <h1>{props.title}</h1>


}


export default App;
