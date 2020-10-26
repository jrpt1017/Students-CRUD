import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import {getAllStudents, deleteStudent} from '../../redux/actions/studentAction';
import { Button, ButtonGroup } from '@material-ui/core';

const columns = [
  { id: 'firstName', label: 'First Name', minWidth: 170 },
  { id: 'middleName', label: 'Middle Name', minWidth: 100 },
  { id: 'lastName', label: 'Last Name', minWidth: 100 },
  { id: 'age', label: 'Age', minWidth: 100 },
  { id: 'fullAddress', label: 'House Address', minWidth: 100 },
  { id: 'fullBrgy', label: 'Brgy', minWidth: 100 },
  { id: 'municipality', label: 'Municipality', minWidth: 100 },
  { id: 'postalCode', label: 'Postal Code', minWidth: 100 },
  {id: 'actions', label: 'Actions', minWidth: 100},
];

const useStyles = makeStyles({
  root: {
    width: '100%',
    marginTop: 12,
  },
  container: {
    maxHeight: 440,
  },
  tableHeader: {
    backgroundColor: 'darkcyan',
  },
});

const DashBoard = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const students = useSelector(state => state.students)

  useEffect(() => {
    dispatch(getAllStudents());
  }, [dispatch]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const data = () => {
    return students.map((student) => {
      const {name, address, age} = student;
      const {firstName, middleName, lastName} = name;
      const {houseNumber, streetName, municipality, brgy, postalCode} = address;
      const {brgyNumber, zoneNumber} = brgy;
      const fullAddress = `${houseNumber} ${streetName}`;
      const fullBrgy = `${brgyNumber} zone ${zoneNumber}`;
      return {
        firstName, middleName, lastName, age, fullAddress, fullBrgy, municipality, postalCode
      }
    });
  }

  const handleOnChangeDelete = (event) => {
    dispatch(deleteStudent('5f957de55090c406bde5f097'));
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data().slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={`row-${index}`}>
                  {columns.map((column, index) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={`cell-${index}`} align={column.align}>
                        {column.id === 'actions' ? 
                        (
                          <ButtonGroup variant="contained" color="primary" aria-label="outlined primary button group">
                            <Button color="primary">Edit</Button>
                            <Button onClick={handleOnChangeDelete}color="secondary">Delete</Button>
                          </ButtonGroup>
                        ) 
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
        count={data().length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

export default DashBoard;
