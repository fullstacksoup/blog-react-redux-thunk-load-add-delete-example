import React, {useState, useEffect} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import RemoveIcon from '@material-ui/icons/Delete';
import { useDispatch } from "react-redux";
import { deleteProduct  } from "../../store/product-thunk";
import { Typography } from '@material-ui/core';


function DeleteFormDialog(props) {
  const [open, setOpen] = React.useState(false);
  
  const [id, setId] = useState(props.data.id);
  const [title, setTitle] = useState(props.data.Title);
  const [description, setDescription] = useState(props.data.Description);
const [quantity, setQuantity] = React.useState(props.data.Quantity);   
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  let dispatch = useDispatch();
  
  const handleSubmit = e => {
    dispatch(deleteProduct(props.id))    
    setOpen(false);
  }

  return (
    <div>
      <Button color="secondary" onClick={handleClickOpen}>
        <RemoveIcon/>
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="delete-product-form-dialog">
        <DialogTitle id="delete-product-form-title">{props.data.Title}</DialogTitle>
        <DialogContent>
          <DialogContentText>
          </DialogContentText>
          <Typography variant="body2">
          TItle: {title}
          </Typography>
          <Typography variant="body2">
          Description: {description}
          </Typography>          
          <Typography variant="body2">
          Quantity: {quantity}
          </Typography>          
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default DeleteFormDialog;

