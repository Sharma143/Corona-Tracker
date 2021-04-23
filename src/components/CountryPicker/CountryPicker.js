import React, { useState, useEffect } from 'react'
import { FormControl, NativeSelect } from "@material-ui/core"
import { fetchCountry } from "../../api"

const CountryPicker = ({ handlerCountryChange, country }) => {
    const [fetchedCountry, setFetchedCountry] = useState([])
    useEffect(() => {
        const fetchApi = async () => {
            setFetchedCountry(await fetchCountry())
        }
        fetchApi()
    }, [setFetchedCountry])

    return (
        <FormControl style={{ width: "200px", paddingTop: "10px", paddingBottom: "10px" }}>
            <NativeSelect defaultValue="" onChange={(e) => handlerCountryChange(e.target.value)}>
                <option value="">Global</option>
                {fetchedCountry.map((country, i) => <option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker
