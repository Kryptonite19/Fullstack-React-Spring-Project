import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const columns = [
  { id: '1', label: 'Measurement\u00a0No', minWidth: 170 , pattern: "[0-9]+(.[0-9]{1,2})?%?"},
  { id: '2', label: 'Dim.\u00a0wt.', minWidth: 100 , pattern: "[0-9]+(.[0-9]{1,2})?%?"},
  {
    id: '3',
    label: 'Volume',
    minWidth: 170,
    align: 'right',
    pattern: "[0-9]+(.[0-9]{1,2})?%?",
  },
  {
    id: '4',
    label: 'Height',
    minWidth: 170,
    align: 'right',
    pattern: "[0-9]+(.[0-9]{1,2})?%?",
  },
  {
    id: '5',
    label: 'Length',
    minWidth: 170,
    align: 'right',
    pattern: "[0-9]+(.[0-9]{1,2})?%?",
  },
  {
    id: '6',
    label: 'Width',
    minWidth: 170,
    align: 'right',
    pattern: "[0-9]+(.[0-9]{1,2})?%?",
  },
  {
    id: '7',
    label: 'Weight',
    minWidth: 170,
    align: 'right',
    pattern: "[0-9]+(.[0-9]{1,2})?%?",
  },
];

function createData(measurement_no, dimwt, volume, height,length, width, weight) {
  return { measurement_no, dimwt, volume, height,length, width, weight };
}

const rows = [
  createData('12', 'IN', 1324171354, 3287263),
];

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
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
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
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
        rowsPerPageOptions={[10, 25, 100]}
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