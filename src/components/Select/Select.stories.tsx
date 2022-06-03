import React, {useMemo, useState} from 'react'
import {Select} from "./Select";

export default {
    title: 'Select',
    component: Select,
};

export const WithValue = () => {

    const [value, setValue] = useState('1')

    return <Select value={value}
                   onChange={setValue}
                   items={[
                       {title: "LA", value: '1'},
                       {title: "NY", value: '2'},
                       {title: "SF", value: '3'}]}/>
}


export const WithoutValue = () => {
    const [value, setValue] = useState(null)
    return <Select
        value={value}
        onChange={setValue}
        items={[
            {title: "LA", value: '1'},
            {title: "NY", value: '2'},
            {title: "SF", value: '3'}]}/>
}



export const WithMemo = () => {
    const [value, setValue] = useState(null)
    const [items, setItems] = useState([
        {title: "Kazan", value: '1', region: 16, isTheMillionCity: true, isCapital: true},
        {title: "Laishevo", value: '2', region: 16, isTheMillionCity:false, isCapital: false},
        {title: "Ufa", value: '3', region: 2, isTheMillionCity:true, isCapital: true},
        {title: "Sterlitamak", value: '4', region: 2, isTheMillionCity:false, isCapital: false},
        {title: "Samara", value: '5', region: 63, isTheMillionCity:true,isCapital: true},
        {title: "Tolyatti", value: '6', region: 63, isTheMillionCity:false, isCapital: false},
    ])

    const capitalOfRegions = useMemo(() => {
        return items.filter((city) => city.isCapital)
    }, [items])

    const citiesOfTatarstan = useMemo(() => {
        return items.filter((city) => city.region === 16)
    }, [items])

    const notTheMillionCity = useMemo(() => {
        return items.filter((city) => !city.isTheMillionCity)
    }, [items])

    return <>
        <div>
            <div>Столицы регионов</div>
            <Select
                value={value}
                onChange={setValue}
                items={capitalOfRegions}/>
        </div>
        <div>
            <div>Города Татарстана</div>
            <Select
                value={value}
                onChange={setValue}
                items={citiesOfTatarstan}/>
        </div>
        <div>
            <div>Города, не являющиеся миллионниками</div>
            <Select
                value={value}
                onChange={setValue}
                items={notTheMillionCity}/>
        </div>
    </>
}



