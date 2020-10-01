import React, { ReactElement } from 'react';
import { QueryCache, ReactQueryCacheProvider } from 'react-query';
import { ToastContainer } from 'react-toastify';
import Routes from './routes';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-toastify/dist/ReactToastify.css';

function App(): ReactElement {
  const queryCache = new QueryCache();

  return (
    <ReactQueryCacheProvider queryCache={queryCache}>
      <Routes />
      <ToastContainer />
    </ReactQueryCacheProvider>
  );
}

export default App;
