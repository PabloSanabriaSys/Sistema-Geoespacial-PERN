import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';

const d = [
    {
        "month": "Enero",
        "month_date": "2024-01-01T00:00:00",
        "cantidad_clientes": 4
    },
    {
        "month": "Febrero",
        "month_date": "2024-02-01T00:00:00",
        "cantidad_clientes": 3
    },
    {
        "month": "Marzo",
        "month_date": "2024-03-01T00:00:00",
        "cantidad_clientes": 3
    }
];

const Line = ({ records = d }) => {
    const [chartData, setChartData] = useState(null);
    const [chartOptions, setChartOptions] = useState(null);

    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
        const surfaceColor = documentStyle.getPropertyValue('--surface-color');

        const data = {
            labels: records.map(entry => entry.month),
            datasets: [
                {
                    label: 'Clientes Nuevos',
                    data: records.map(entry => entry.cantidad_clientes),
                    fill: true,
                    borderColor: documentStyle.getPropertyValue('--orange-500'),
                    tension: 0.4,
                    backgroundColor: 'rgba(255, 167, 38, 0.2)'
                }
            ]
        };

        const options = {
            maintainAspectRatio: false,
            aspectRatio: 0.8,
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                x: {
                    grid: { color: 'rgba(180, 180, 180, 0.35)' }
                },
                y: {
                    grid: { color: 'rgba(180, 180, 180, 0.35)' },
                    label: { color: 'rgba(180, 180, 180, 0.9)' },
                    beginAtZero: true
                
                }
            }
        };

        setChartData(data);
        setChartOptions(options);
    }, []);

    return (
        <div className="p-2 border rounded-lg dark:bg-slate-800 dark:border-none">
            <h3 className="text-2xl text-center font-extrabold m-3">Clientes Nuevos según el Mes</h3>
            {chartData && chartOptions && <Chart type="line" data={chartData} options={chartOptions} />}
        </div>
    );
};

export default Line;
