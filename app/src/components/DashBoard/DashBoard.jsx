import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Button, ButtonGroup,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { getAllStudents, dispatchDeleteStudent } from "../../redux/actions/studentAction";
import { toggleModal, setModalType, setModalID } from "../../redux/actions/modalAction";

const columns = [
  { id: "firstName", label: "First Name", minWidth: 170 },
  { id: "middleName", label: "Middle Name", minWidth: 100 },
  { id: "lastName", label: "Last Name", minWidth: 100 },
  { id: "age", label: "Age", minWidth: 100 },
  { id: "fullAddress", label: "House Address", minWidth: 100 },
  { id: "brgyName", label: "Brgy", minWidth: 100 },
  { id: "municipality", label: "Municipality", minWidth: 100 },
  { id: "postalCode", label: "Postal Code", minWidth: 100 },
  { id: "actions", label: "Actions", minWidth: 100 },
];

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    marginTop: 100,
  },
  container: {
    maxHeight: 440,
  },
  tableHeader: {
    backgroundColor: "darkcyan",
  },
  wrapper: {
    margin: theme.spacing(10, 30, 10, 30),
    flexGrow: 1,
  },
  addStudent: {
    margin: 12,
  },
  link: {
    textDecoration: 'none',
  }
}));

const DashBoard = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const students = useSelector((state) => state.studentState.students);

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
    return students && students.map((student) => {
      const { name, address, age, _id } = student;
      const { firstName, middleName, lastName } = name;
      const { houseNumber, streetName, municipality, brgyName, postalCode } = address;
      const fullAddress = `${houseNumber} ${streetName}`;
      return {
        _id, firstName, middleName, lastName, age, fullAddress, brgyName, municipality, postalCode,
      };
    }) || [];
  };

  const handleOnChangeDelete = (id) => {
    dispatch(toggleModal(true));
    dispatch(setModalType('delete'));
    dispatch(setModalID(id));
  };

  return (
    <Paper className={classes.root}>
      <Link to="addStudent" className={classes.link}>
        <Button color="primary" variant="contained" className={classes.addStudent}>Add Student</Button>
      </Link>
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
            {data() && data().slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={`row-${index}`}>
                  {columns.map((column, index) => {
                    const value = row[column.id];
                    const { _id: id } = row;
                    return (
                      <TableCell key={`cell-${index}`} align={column.align}>
                        {column.id === "actions" ?
                          (
                            <ButtonGroup variant="contained" color="primary" aria-label="outlined primary button group">
                              <Link to={`/updateStudent/${id}`} className={classes.link}>
                                <Button color="primary">Update</Button>
                              </Link>
                              <Button onClick={() => { return handleOnChangeDelete(id); }} color="secondary">Delete</Button>
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
};

export default DashBoard;
