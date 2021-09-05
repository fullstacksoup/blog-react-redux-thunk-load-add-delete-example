import axiosConn from '../global/axiosConn';
import { loadProductsSuccess, 
         getProductSuccess,          
         deleteProductSuccess, 
         addProductSuccess} from './product-actions';

export const loadProducts = () => {
  return async function (dispatch) {
    const url = `/api/product/getall`;
    
    await axiosConn      
      .get(url)
      .then((resp) => {
        console.log("resp", resp);
        dispatch(loadProductsSuccess(resp.data.data));
      })
      .catch((error) => console.log(error));
  };
};

export const getProduct = (id) => {
  return async function (dispatch) {
    const url = `/api/product/getsinglerecord/${id}`;

    await axiosConn      
      .get(url)
      .then((resp) => {
        console.log("resp", resp);
        dispatch(getProductSuccess(resp.data.data));
      })
      .catch((error) => console.log(error));
  };
};


export const deleteProduct = (id) => {
  return async function (dispatch) {
    const url = `api/product/remove/${id}`;      

    await axiosConn      
      .delete(url)
      .then((resp) => {          
        dispatch(deleteProductSuccess(id));        
      })
      .catch((error) => console.log(error));
  };
};

export const addProduct = (record) => {
  return async function (dispatch) {    
    const url = `api/product/add`;

    await axiosConn      
      .post(url, {
          Title: record.Title,
          Description: record.Description,          
          Quantity: record.Quantity
      })
      .then((resp) => {        
        dispatch(addProductSuccess(resp.data.data));        
      })
      .catch((error) => console.log(error));
  };
};
