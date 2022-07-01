import React, {useEffect, useState} from "react";

export default {
    title: 'useEffect demo',

};


export const SimpleExample = () => {

    const [fake, setFake] = useState<number>(1)
    const [counter, setCounter] = useState<number>(1)

    useEffect(() => {
        console.log('useEffect will work after every render component')
        document.title = counter.toString()
    })


    useEffect(() => {
        console.log('useEffect only first render (componentDidMount)')
        document.title = counter.toString()
    }, [counter])


    useEffect(() => {
        console.log('useEffect first render and every counter change')
        document.title = counter.toString()
    }, [counter])
    return <>

        <button onClick={() => setFake(fake + 1)}>+</button>
        <button onClick={() => setCounter(counter + 1)}>counter+</button>
        hello, {counter} {fake}

    </>
}


export const SetTimeoutExample = () => {

    const [fake, setFake] = useState<number>(1)
    const [counter, setCounter] = useState<number>(1)

    useEffect(() => {
        setTimeout(() => {
            document.title = counter.toString()
        }, 1000)
    }, [counter]) // props.counter


    return <>

        <button onClick={() => setFake(fake + 1)}>+</button>
        <button onClick={() => setCounter(counter + 1)}>counter+</button>
        hello, {counter} {fake}

    </>
}

export const SetIntervalExample = () => {

    const [fake, setFake] = useState<number>(1)
    const [counter, setCounter] = useState<number>(1)

    useEffect(() => {
        // setCounter(counter+1) // будет всегда два
        setCounter((state) => state + 1) //
    }, [])


    return <>
        hello, counter : {counter}, fake: {fake}

    </>
}