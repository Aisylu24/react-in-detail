import React, {ChangeEvent, useMemo, useState} from 'react'
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
        {title: "Laishevo", value: '2', region: 16, isTheMillionCity: false, isCapital: false},
        {title: "Ufa", value: '3', region: 2, isTheMillionCity: true, isCapital: true},
        {title: "Sterlitamak", value: '4', region: 2, isTheMillionCity: false, isCapital: false},
        {title: "Samara", value: '5', region: 63, isTheMillionCity: true, isCapital: true},
        {title: "Tolyatti", value: '6', region: 63, isTheMillionCity: false, isCapital: false},
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


export const WithCheckbox = () => {
    const [value, setValue] = useState(null)
    const [items, setItems] = useState([
        {title: "Kazan", value: '1', region: 16, isTheMillionCity: true, isCapital: true},
        {title: "Laishevo", value: '2', region: 16, isTheMillionCity: false, isCapital: false},
        {title: "Ufa", value: '3', region: 2, isTheMillionCity: true, isCapital: true},
        {title: "Sterlitamak", value: '4', region: 2, isTheMillionCity: false, isCapital: false},
        {title: "Samara", value: '5', region: 63, isTheMillionCity: true, isCapital: true},
        {title: "Tolyatti", value: '6', region: 63, isTheMillionCity: false, isCapital: false},
    ])


    const [filter, setFilter] = useState({
        capitals: false,
        tatarstan: false,
        towns: false
    })


    let filteredCities = items

    const capitalOfRegions = useMemo(() => {
        console.log(1)
        return items.filter((city) => city.isCapital)
    }, [items])

    const citiesOfTatarstan = useMemo(() => {
        console.log(2)
        return items.filter((city) => city.region === 16)
    }, [items])

    const notTheMillionCity = useMemo(() => {
        console.log(3)
        return items.filter((city) => !city.isTheMillionCity)
    }, [items])


    if(filter.capitals) {
        filteredCities = capitalOfRegions
    }
    if(filter.tatarstan)
        filteredCities = citiesOfTatarstan
    if(filter.towns)
        filteredCities = notTheMillionCity

    return <>
        <div>
            <Select
                value={value}
                onChange={setValue}
                items={filteredCities}/>
        </div>
        <fieldset>
            <legend>Choose filter:</legend>
            <div>
                <input type="checkbox" id="Capitals" name='Capitals' checked={filter.capitals} onChange={() => setFilter({...filter, capitals: !filter.capitals})} disabled={filter.tatarstan || filter.towns}/>
                <label htmlFor="Capitals">Capitals</label>
            </div>
            <div>
                <input type="checkbox" id="Tatarstan" name="Tatarstan" checked={filter.tatarstan} onChange={() => setFilter({...filter, tatarstan: !filter.tatarstan})} disabled={filter.capitals || filter.towns}/>
                <label htmlFor="Tatarstan">Tatarstan's cities</label>
            </div>
            <div>
                <input type="checkbox" id="towns" name="towns" checked={filter.towns} onChange={() => setFilter({...filter, towns:!filter.towns})} disabled={filter.capitals || filter.tatarstan}/>
                <label htmlFor="towns">Small towns</label>
            </div>

        </fieldset>
    </>
}


