import './App.css';
import { useState } from 'react';
import Items from './components/Items';
import Navbar from './components/Navbar';
import { itemContext } from './itemContext';
// import { totalContext } from './totalContext';
import CustomItemContext from './itemContext';


function App() {
 
  return (
    // <itemContext.Provider value={{ item, setItem, total, setTotal}}>
        /* <totalContext.Provider value={{total, setTotal}}> */
        // customcompinent acts a provider 
        <CustomItemContext>
          <div className='App'>
            <h2>Shopping Cart</h2>
              <Navbar />
              <Items />
              
          </div>
        </CustomItemContext>
        /* </totalContext.Provider> */
        // </itemContext.Provider>
  );
}

export default App;
