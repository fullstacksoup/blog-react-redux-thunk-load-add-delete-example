export const PRODUCTS_GET_SINGLE_RECORD_SUCCESS = '[PRODUCTS] GET SINGLE RECORD SUCCESS';
export const PRODUCTS_LOAD_RECORDS_SUCCESS = '[PRODUCTS] LOAD RECORDS SUCCESS';
export const PRODUCTS_ADD_RECORD_SUCCESS = '[PRODUCTS] ADD RECORD SUCCESS';
export const PRODUCTS_DELETE_RECORD_SUCCESS = '[PRODUCTS] DELETE RECORD SUCCESS';

export const loadProductsSuccess = (data) => ({
    type: PRODUCTS_LOAD_RECORDS_SUCCESS,
    payload: data,
});

export const getProductSuccess = (record) => ({
    type: PRODUCTS_GET_SINGLE_RECORD_SUCCESS,
    payload: record,
});

export const addProductSuccess = (record) => ({
  type: PRODUCTS_ADD_RECORD_SUCCESS,
  payload: record
});
  
export const deleteProductSuccess = (id) => ({
    type: PRODUCTS_DELETE_RECORD_SUCCESS,    
    payload: id
});

