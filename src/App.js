import './App.css';
import React from 'react';
import Product from"./Products";
import {DataProvider} from './DataEntryContext';


function App() {
  return (
    <React.Fragment>
      <br></br>
      <DataProvider>
      <Product/>
      </DataProvider>
    </React.Fragment>
  );
}

export default App;
