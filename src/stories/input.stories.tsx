import React, {useRef, useState} from 'react';

export default {
  title: 'input',
  //component: input,
};

export const UncontrolledInputTrackValue = () => {

  let [value, setValue] = useState('')
  return (
      <>
        <input onChange={(e)=>
          setValue(e.currentTarget.value)
        }/> - {value}
      </>
      )


}

export const UncontrolledInputGetValue = () => {
  let [value, setValue] = useState('')
  let inputRef = useRef<HTMLInputElement>(null)
    const save =()=> {
      const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }
  return(
      <>
        <input ref={inputRef}/> <button onClick={save}>save</button> - actual value: {value}
      </>
  )
}

export const ControlledInput = () => {
  const[parentValue, setValue] = useState('')

  return <input value={parentValue} onChange={(e => setValue(e.currentTarget.value) )}/>
}

export const ControlledCheckbox = () => {
    const[parentValue, setValue] = useState(true)

    return <input type={'checkbox'} checked={parentValue} onChange={(e => setValue(e.currentTarget.checked))}/>
}

export const ControlledSelect = () => {
    const[parentValue, setValue] = useState<string | undefined>(undefined)

    return <select value={parentValue} onChange={e => setValue(e.currentTarget.value)}>
        <option>select city</option>
        <option value="1">Minsk</option>
        <option value="2">Moscow</option>
        <option value="3">Kazan</option>
    </select>
}


