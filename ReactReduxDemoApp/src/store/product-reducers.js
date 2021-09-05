import * as actionTypes from './product-actions';

const initialState = {    
    products: [],    
    productRecord: [],    
    loading: true
};

const productReducers = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PRODUCTS_LOAD_RECORDS_SUCCESS: {
      return {
        ...state,
        products: action.payload,
        loading: false,
      };    
    }
  
    case actionTypes.PRODUCTS_DELETE_RECORD_SUCCESS: {
      return {
        ...state,        
        //* Get all the records exceot the one that was deleted
        products: state.products.filter(products => products.Id !== action.payload), 
        loading: false      
      }
    }

    case actionTypes.PRODUCTS_ADD_RECORD_SUCCESS: {
      const newProductsArray = [...state.products];      
      newProductsArray.splice(2, 0, action.payload);      
      return {
        ...state,        
        products: newProductsArray,
        loading: false
      };
    }

    case actionTypes.PRODUCTS_GET_SINGLE_RECORD_SUCCESS: {
      return {
        ...state,
        product: action.payload,
        loading: false,
      };
    }

    default:
      return state;
  }
};

export default productReducers;