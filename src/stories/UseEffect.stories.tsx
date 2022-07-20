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

    const [counter, setCounter] = useState<number>(1)

    useEffect(() => {
        setTimeout(() => {
            setCounter(state => state + 1)
        }, 1000)
    }, []) // props.counter


    return <>
        Hello, counter: {counter}

    </>
}

export const SetIntervalExample = () => {

    const [counter, setCounter] = useState<number>(1)

    useEffect(() => {
        // setCounter(counter+1) // будет всегда 2, так как значение береться из замыкания и оно там всегда будет 1
        const intervalId = setInterval(() => {
            setCounter((state) => state + 1) // будет обновляться значение, если даже пустая зависимость
        }, 1000)
        return clearInterval(intervalId)

    }, [])


    return <>
        hello, counter : {counter}

    </>
}

export const ResetEffectExample = () => {

    const [counter, setCounter] = useState<number>(1)

    console.log('component render')

    useEffect(() => {
        console.log('Effect occurred: ' + counter)
        return () => {
            console.log('reset effect')
        }
    }, [counter])

    return <>
        hello, counter : {counter}
        <button onClick={() => setCounter(counter + 1)}>counter+</button>
    </>
}

export const KeysTrackerExample = () => {

    const [text, setText] = useState("")

    useEffect(() => {
        let listener = (e: KeyboardEvent) => {
            console.log(e.key)
            // setText(state => state + e.key)} ,  []
            setText(text + e.key)
        }
        window.document.addEventListener('keypress', listener
        )
        return () => {
            window.removeEventListener('keypress', listener)
        }
    }, [text])

    return <>
        hello, text : {text}
    </>
}

export const SetTimeout = () => {

    const [text, setText] = useState("")

    useEffect(() => {
       let timeout = setTimeout(() => {
            setText('3 sec passed')
        }, 3)
        return () => {
            clearTimeout(timeout)
        }
    }, [text])

    return <>
        hello, text : {text}
    </>
}