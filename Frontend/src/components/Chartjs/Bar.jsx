import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';
import { useThema } from '../../contexts/ThemaContext';

export default function Bar() {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});
    const { theme } = useThema();

    useEffect(() => {
        const data = theme === 'light' ? {
            labels: ['Q1', 'Q2', 'Q3', 'Q4'],
            datasets: [
                {
                    label: 'Sales',
                    data: [540, 325, 702, 620],
                    backgroundColor: [
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(153, 102, 255, 0.2)'
                    ],
                    borderColor: [
                        'rgb(255, 159, 64)',
                        'rgb(75, 192, 192)',
                        'rgb(54, 162, 235)',
                        'rgb(153, 102, 255)'
                    ],
                    borderWidth: 1
                }
            ]
        }:
        {
            labels: ['Q1', 'Q2', 'Q3', 'Q4'],
            datasets: [
                {
                    label: 'Sales',
                    data: [540, 325, 702, 620],
                    backgroundColor: [
                        'rgba(255, 159, 64, 0.4)',
                        'rgba(75, 192, 192, 0.4)',
                        'rgba(54, 162, 235, 0.4)',
                        'rgba(153, 102, 255, 0.4)'
                    ],
                    borderColor: [
                        'rgb(255, 159, 64)',
                        'rgb(75, 192, 192)',
                        'rgb(54, 162, 235)',
                        'rgb(153, 102, 255)'
                    ],
                    borderWidth: 1
                }
            ]
        };

        const options = theme === 'light' ? {
            scales: {
                x: {
                },
                y: {
                    beginAtZero: true
                }
            },
            plugins: {
                legend: {
                    labels: {
                        color: 'black'
                    }
                }
            }
        } : {
            scales: {
                x: {
                    grid: { color: 'rgba(180, 180, 180, 0.1)' }
                },
                y: {
                    grid: { color: 'rgba(180, 180, 180, 0.1)' },
                    label: { color: 'rgba(180, 180, 180, 0.9)' },
                    beginAtZero: true
                }
            },
            plugins: {
                legend: {
                    labels: {
                        color: 'white'
                    }
                }
            }
        };

        setChartData(data);
        setChartOptions(options);
    }, [theme]);

    return (
        <div className='p-2 border rounded-lg  dark:bg-slate-800 dark:border-none'>
            <Chart type="bar" data={chartData} options={chartOptions} />
        </div>
    )
}
