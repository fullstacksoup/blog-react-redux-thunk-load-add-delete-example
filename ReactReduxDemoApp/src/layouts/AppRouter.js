import React from 'react';
import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom';
import ProductsParentLayout from '../pages/products/index';

export default function AppRouter(props) {
  
  return (
    <div>                 
      <Switch>        
          <Route exact path="/" component={ProductsParentLayout} />      
          <Route exact path="/product" component={ProductsParentLayout} />                
      </Switch>    
    </div>
  );
}
