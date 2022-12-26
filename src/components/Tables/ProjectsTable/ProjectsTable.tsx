import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { workTypes } from '../../../pages/CreateProject/data';
import { useState } from 'react';

interface Column {
  id: 'name' | 'type' | 'start' | 'end' | 'mark' | 'reviews';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: 'name', label: 'Наименование', minWidth: 170 },
  { id: 'type', label: 'Тип работ', minWidth: 100 },
  {
    id: 'start',
    label: 'Дата начала',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toLocaleString('en-US'),
  },
  {
    id: 'end',
    label: 'Дата конца',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toLocaleString('en-US'),
  },
  {
    id: 'mark',
    label: 'Оценка',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toFixed(2),
  },
  {
    id: 'reviews',
    label: 'Отзывы',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toFixed(0),
  },
];

interface Data {
  key: number;
  name: string;
  type: string;
  start: string;
  end: string;
  mark: number;
  reviews: number;
}

function createData(
  key: number,
  name: string,
  type: string,
  start: string,
  end: string,
  mark: number,
  reviews: number
): Data {
  return {key, name, type, start, end, mark, reviews };
}


export default function ProjectsTable({tableData}:any) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const getParambyNumber = (param: number, instance: any) => {
    return instance.find((value:any) => value.id == param).title
  }

  const getRows = () => {
    return tableData.map((proj:any, index:any) =>  createData(index, proj.projectName, getParambyNumber(proj.workType, workTypes), proj.dateStart, proj.dateEnd, proj.mark, proj.reviews))
  }
  
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%' }}>
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {getRows()
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row:any) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.key}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={getRows().length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
