import React, { useState, useEffect } from 'react'
import { Line, Bar } from "react-chartjs-2"
import { fetchDailyData } from "../../api"



const Charts = ({ data: { confirmed, recovered, deaths }, country }) => {
    const [dailyData, setDailyData] = useState({})
    useEffect(() => {
        const fetchApi = async () => {
            setDailyData(await fetchDailyData())
        }
        fetchApi();
    }, [])

    const lineChart = (
        dailyData.length ? (
            <Line
                data={{
                    labels: dailyData.map(({ date }) => new Date(date).toLocaleDateString()),
                    datasets: [{
                        data: dailyData.map(({ confirmed }) => confirmed),
                        label: "INFECTED",
                        borderColor: "cornflowerblue",
                        fill: true
                    }, {
                        data: dailyData.map(({ deaths }) => deaths),
                        label: "DEATHS",
                        borderColor: "crimson",
                        fill: true
                    }],
                }}
            />
        ) : null
    )
    const barChart = (
        confirmed ?
            (
                <Bar
                    data={{
                        labels: ['Infected', 'Recovered', 'Deaths'],
                        datasets: [{
                            label: 'People',
                            backgroundColor: ["cornflowerblue", "darkseagreen", "crimson"],
                            data: [confirmed.value, recovered.value, deaths.value]
                        }]
                    }}
                    options={{
                        legend: { display: false },
                        title: {
                            display: true, text: `Current state in ${country}`
                        }
                    }}
                />) : null
    )

    return (
        <div>
            {country ? barChart : lineChart}
        </div>
    )
}

export default Charts
