import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';
const blue500 = 'rgba(59, 130, 246, 0.8)';
const yellow500 = 'rgba(252, 211, 77, 0.8)';
const green500 = 'rgba(75, 192, 192, 0.8)';
const blue400 = 'rgba(59, 130, 246, 0.6)';
const yellow400 = 'rgba(252, 211, 77, 0.6)';
const green400 = 'rgba(75, 192, 192, 0.6)';

export default function Pie({records = [540, 325, 702]}) {
    const [chartData, setChartData] = useState(null);
    const [chartOptions, setChartOptions] = useState(null);

    useEffect(() => {
        const data = {
            labels: ['Cochabamba', 'Santa Cruz', 'La Paz'],
            datasets: [
                {
                    data: records,
                    backgroundColor: [
                        blue500,
                        yellow500,
                        green500
                    ],
                    hoverBackgroundColor: [
                        blue400,
                        yellow400,
                        green400
                    ]
                }
            ]
        }
        const options = {
            plugins: {
                legend: {
                    labels: {
                        usePointStyle: true
                    }
                }
            }
        };

        setChartData(data);
        setChartOptions(options);
    }, []);

    return (
        <div className="w-full h-full border rounded-lg  dark:bg-slate-800 dark:border-none card flex flex-col  items-center m-auto">
            <h3 className='text-2xl text-center font-extrabold  m-2 mt-5'>Clientes en Departamentos</h3>
            <div className='h-full flex justify-center  items-center'>
                {(chartData && chartOptions) && <Chart type="pie" data={chartData} options={chartOptions} className="h-[21rem] " />}

            </div>
        </div>
    )
}
