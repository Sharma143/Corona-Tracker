import React from "react";
import Highcharts from "highcharts/highstock";
import PieChart from "highcharts-react-official";

const Pie = ({ data: { confirmed, recovered, deaths }, country }) => {
    if (!confirmed) {
        return "loading..."
    }

    const options = {
        chart: {
            type: "pie"
        },
        title: {
            text: country
        },
        series: [
            {
                data: [
                    {
                        y: confirmed.value,
                        name: "Confirmed",
                        color: "cornflowerblue"
                    },
                    {
                        y: recovered.value,
                        name: "Recovered",
                        color: "darkseagreen"
                    },
                    {
                        y: deaths.value,
                        name: "Deaths",
                        color: "crimson"
                    },
                ]
            }
        ]
    }
    return (
        <div>
            {country && <PieChart highcharts={Highcharts} options={options} />}
        </div>
    );
}


export default Pie;
