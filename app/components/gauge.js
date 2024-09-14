"use client";

import { Gauge } from '@mui/x-charts/Gauge';

export default function ChartGauge({disponibilidad, total}) {
    return (
        <Gauge 
            width={200} 
            height={200} 
            value={Math.round(disponibilidad)}
            min={0} 
            max={total} 
            text={({ value }) => `${value}%`}
            innerRadius="75%"
            outerRadius="100%"
        />
    );
}
