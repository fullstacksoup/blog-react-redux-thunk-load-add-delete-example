import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { useDispatch, useSelector } from "react-redux";
import { loadProducts  } from "store/product-thunk";
import AddFormDialog from 'components/Products/AddFormDialog';
import ProductsTable from 'components/Products/ProductsTable';

export default function ProductsParentLayout() {
    const productData = useSelector((state) => state.reducers.productReducers.products);
        
    let dispatch = useDispatch();
   
    useEffect(() => {
       dispatch(loadProducts());
    }, []);

                  
    return (
        <div style={{ margin: '5em' }}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <AddFormDialog />
                </Grid>
                <Grid item xs={12} >
                    <ProductsTable data={productData} />
                </Grid>
            </Grid>                
        </div>     
    )
}

