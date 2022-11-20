import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

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

const rows = [
  createData(1,'Ангарск-Тальны', 'Ремонт', '12.06.2016', '15.09.2016', 5.0, 585),
  createData(2,'Ангарск-Одинск', 'Строительство', '31.07.2016', '03.10.2016', 4.7, 237),
  createData(3,'Ангарск-Зверево', 'Строительство', '24.03.2017', '28.06.2017', 4.5, 15),
  createData(4,'Ангарск-Стеклянка', 'Ремонт', '15.12.2016', '21.03.2017', 4.3, 36),
  createData(5,'Ангарск-Московщина', 'Ремонт', '10.09.2016', '21.01.2017', 4.0, 28),
  createData(6,'Ангарск-Ширяева', 'Ремонт', '22.05.2018', '25.08.2018', 3.8, 101),
  createData(7,'Ангарск-Тайтура', 'Строительство', '18.09.2018', '24.04.2019', 3.7, 8),
  createData(8,'Ангарск-Горяшина', 'Ремонт', '23.07.2019', '01.06.2020', 3.5, 31),
  createData(9,'Ангарск-Новожилкино', 'Строительство', '10.04.2020', '21.05.2021', 3.0, 68),
  createData(10,'Ангарск-Архиреевка', 'Строительство', '30.08.2019', '06.11.2019', 2.9, 21),
  createData(11,'Ангарск-Горяшина', 'Строительство', '22.05.2018', '25.08.2018', 2.8, 16),
];

export default function ProjectsTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

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
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
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
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
