"use client";

import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

export default function BasicBars() {
  return (
    <div className="w-full h-full flex overflow-y-hidden overflow-x-auto items-center justify-center" style={{scrollbarWidth:'none'}}>
        <BarChart
      xAxis={[{ scaleType: 'band', data: ['Lun.', 'Mar.', 'Mier.', 'Jue.', 'Vie.', 'Sab.', 'Do'] }]}
      series={[{ data: [4,3,5,2,6,1,7] }]}
      width={500}
      height={300}
    />
    </div>
    
  );
}
