import { Fragment, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppLayout from './layouts/AppLayout';

function App() {

  return (
    <Fragment>
      <BrowserRouter>
        <AppLayout />
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
