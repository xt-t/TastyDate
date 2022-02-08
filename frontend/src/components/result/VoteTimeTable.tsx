// 1. Spalte: User
// 1. Zeile: pickedDate => aufsteigend und prüfen, ob gleich. Falls ja, Zeiten dem Datum zuordnen.
// 2. Zeile: Zeiten aufsteigend darstellen.
// 3. Zeile: Resultat - Darstellung der Summe
// 4. Zeile: Userwahl - x und Häckchen
// letzte Zeile: neuer Userinput (falls bereits eingegeben - Wahl zwischen löschen und ändern)
//
// Länge durch TimeItemAnzahl => Anzahl Checkboxe
import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {dataCompleteDateInfos} from "../../service/tastydate-api-service";




interface Column {
    id: 'name' | 'code' | 'population' | 'size' | 'density';
    label: string;
}

const columns: Column[] = [
    { id: 'name', label: 'Name'},
    { id: 'code', label: 'ISO\u00a0Code'},
    {
        id: 'population',
        label: 'Population',
    },
    {
        id: 'size',
        label: 'Size\u00a0(km\u00b2)',
    },
    {
        id: 'density',
        label: 'Density',
    },
];

interface Data {
    name: string;
    code: string;
    population: number;
    size: number;
    density: number;
}

function createData(
    name: string,
    code: string,
    population: number,
    size: number,
): Data {
    const density = population / size;
    return { name, code, population, size, density };
}

const rows = [
    createData('India', 'IN', 1324171354, 3287263),
    createData('China', 'CN', 1403500365, 9596961),
    createData('Italy', 'IT', 60483973, 301340)
];

interface VoteTimeTableProps {
    transferSettingsItem: dataCompleteDateInfos
}

export default function VoteTimeTable({transferSettingsItem}:VoteTimeTableProps) {

    return (
        <Paper sx={{ width: '80%' }}>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center" colSpan={2}>
                                {transferSettingsItem}
                            </TableCell>
                            <TableCell align="center" colSpan={3}>
                                Details
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>


                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>

                            </TableCell>
                        </TableRow>
                        {/*{rows.map((row) => {*/}
                        {/*        return (*/}
                        {/*            <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>*/}
                        {/*                {columns.map((column) => {*/}
                        {/*                    const value = row[column.id];*/}
                        {/*                    return (*/}
                        {/*                        <TableCell key={column.id}>*/}
                        {/*                            {value}*/}
                        {/*                        </TableCell>*/}
                        {/*                    );*/}
                        {/*                })}*/}
                        {/*            </TableRow>*/}
                        {/*        );*/}
                        {/*    })}*/}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
}