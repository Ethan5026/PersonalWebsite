import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

type DataTableProps = {
    tableHeading: string[],
    rows: (string | number)[][]
}

export default function DataTable(props: DataTableProps) {

    const tableCells: JSX.Element[] = []
    props.tableHeading.forEach((heading: string) => {
        tableCells.push(<TableCell align={'left'}><strong>{heading}</strong></TableCell>)
    })
    const rowCells: JSX.Element[] = []
    props.rows.forEach((row) => {

        const tableCells: any[] = []
        row.forEach((rowContent) => {
            tableCells.push(<TableCell align="left">{rowContent}</TableCell>)
        })

        rowCells.push(<TableRow key={row[0]} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            {tableCells}
            </TableRow>)
    })
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {tableCells}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rowCells}
                </TableBody>
            </Table>
        </TableContainer>
    );
}