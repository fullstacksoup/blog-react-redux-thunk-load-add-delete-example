import React, {useState, useEffect} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { useDispatch } from 'react-redux';
import { addProduct  } from 'store/product-thunk';

export default function AddForm(props) {
  const [open, setOpen] = React.useState(false);    
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = React.useState(0);
  const qList = [1,2,3,4,5,6,7,8,9,10];
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  let dispatch = useDispatch();
  
  const handleSubmit = e => {
    const newData = {Title: title, Description: description, Quantity: quantity};
    setTitle('');
    setDescription('');    
    setQuantity(0);
    dispatch(addProduct(newData))    
    setOpen(false);
  }
  
  const handleTitleChange = (value) => {
    setTitle(value);    
  };

  const handleDescChange = (value) => {
    setDescription(value);    
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  // console.log('Dialog ', props)
  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Add Record
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add Product</DialogTitle>
        <DialogContent>
          <DialogContentText>
          </DialogContentText>
          
          <TextField
            autoFocus
            margin="dense"
            autoComplete="off"
            value={title}
            defaultValue=""
            id="Title"
            name="Title"
            label="Title"
            onChange={(e) => handleTitleChange(e.target.value)}
            type="text"
            fullWidth
          />
          <TextField
            autoFocus         
            autoComplete="off"   
            value={description}
            defaultValue=""
            margin="dense"
            id="Description"
            name="Description"
            label="Description"
            onChange={(e) => handleDescChange(e.target.value)}
            type="text"
            fullWidth
          />
          
         <FormControl variant="standard" style={{marginTop: '25px'}}>
          <InputLabel id="demo-simple-select-outlined-label" >Quantity</InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={quantity}
            onChange={handleQuantityChange}
            label="Age"
          >
            <MenuItem key={0} value={0}>None</MenuItem>  
            {qList.map((item) => (
              <MenuItem key={item} value={item}>{item}</MenuItem>  
            ))}
        </Select>
      </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
