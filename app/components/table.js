"use client";
import React, {useEffect} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ChartGauge from './gauge';

function createData(hostname, ip, estado, fecha) {
    return { hostname, ip, estado, fecha };
}

const rows = [
    createData('hostname', '192.168.2.2', 'DISPONIBLE', '28/05/2024'),
    createData('hostname', '192.168.2.2', 'NO DISPONIBLE', '28/05/2024'),
    createData('hostname', '192.168.2.2', 'DISPONIBLE', '28/05/2024'),
    createData('hostname', '192.168.2.2', 'DISPONIBLE', '28/05/2024'),
    createData('hostname', '192.168.2.2', 'DISPONIBLE', '28/05/2024'),
    createData('hostname', '192.168.2.2', 'DISPONIBLE', '28/05/2024'),
    createData('hostname', '192.168.2.2', 'NO DISPONIBLE', '28/05/2024'),
    createData('hostname', '192.168.2.2', 'DISPONIBLE', '28/05/2024'),
    createData('hostname', '192.168.2.2', 'DISPONIBLE', '28/05/2024'),
    createData('hostname', '192.168.2.2', 'NO DISPONIBLE', '28/05/2024'),
    createData('hostname', '192.168.2.2', 'DISPONIBLE', '28/05/2024'),
    createData('hostname', '192.168.2.2', 'DISPONIBLE', '28/05/2024'),
    createData('hostname', '192.168.2.2', 'DISPONIBLE', '28/05/2024'), 
];

function getStatusStyle(estado) {
  switch (estado) {
      case 'DISPONIBLE':
          return { backgroundColor: '#F3F7FD', color: '#2E5AAC', border: '2px solid #89A7E0' };
      case 'NO DISPONIBLE':
          return { backgroundColor: '#F3F7FD', color: '#717171', border: '2px solid #CCCCCD' };
      default:
          return { backgroundColor: 'grey', color: 'white' };
  }
}

export default function MyTable({setDisponibles}) {

    useEffect( () => {
        const total = rows.length;
        const disponibles = rows.filter(row => row.estado === "DISPONIBLE").length;
        const porcentajeDisponible = (disponibles / total) * 100;
        setDisponibles(porcentajeDisponible);

    }, []);

    return (
        <div
            style={{
                padding: '16px',
                zIndex: 10,
                width: '100%',
                height: '100%',
                overflowY: 'auto',
                margin: 'auto',
            }}
        >
            <TableContainer 
                component={Paper} 
                sx={{ 
                    bgcolor: 'transparent',
                    boxShadow: 'none',
                    width: '100%', 
                    maxHeight: '100%', 
                    overflowY: 'auto', 
                    scrollbarWidth: 'none', 
                    '&::-webkit-scrollbar': { display: 'none' } 
                }}
            >
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left" className="font-bold">Hostname</TableCell>
                            <TableCell align="left" className="font-bold">I.P. Adress</TableCell>
                            <TableCell align="left" className="font-bold">Fecha</TableCell>
                            <TableCell align="center" className="font-bold">Estado</TableCell>
                            <TableCell align="left"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.ID}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="left">{row.hostname}</TableCell>
                                <TableCell align="left">{row.ip}</TableCell>
                                <TableCell align="left">{row.fecha}</TableCell>
                                <TableCell align="center">
                                    <div className='text-xs border py-1 rounded-md inline-block px-2' style={getStatusStyle(row.estado)}>
                                        {row.estado}
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
