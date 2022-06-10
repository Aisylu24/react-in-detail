import React, { useState} from "react";

export default {
    title: 'useState demo',

};

function generateData() {
    console.log('generateData')
    return 335454545454
}

export const Example1 = () => {

    // const initialValue = useMemo(generateData,[])

    const [counter, setCounter] = useState<number>(generateData) // указав функцию как начальное значение, useState поступить как useMemo,то есть один раз вызовет функцию и сохранит ее значение

    return <>
        {/*<button onClick={() => setCounter(changer)}>+</button>*/}
        <button onClick={() => setCounter((state: number) => state + 1)}>+</button>
        {counter}

    </>
}