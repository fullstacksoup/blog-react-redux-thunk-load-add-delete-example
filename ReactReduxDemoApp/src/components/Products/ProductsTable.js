import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useSelector } from "react-redux";
import DeleteFormDialog from './DeleteFormDialog';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});



export default function ProductsTable() {
  const classes = useStyles();
  const productData = useSelector((state) => state.reducers.productReducers.products);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">ID</TableCell>
            <TableCell align="right">Title</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Quantity</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {productData.map((row) => (
            <TableRow key={row.name}>
              
              <TableCell align="right">{row.Id}</TableCell>
              <TableCell align="right">{row.Title}</TableCell>
              <TableCell align="right">{row.Description}</TableCell>
              <TableCell align="right">{row.Quantity}</TableCell>
              <TableCell align="right">
                  <DeleteFormDialog key={row.Id} id={row.Id} data={row} />;
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}