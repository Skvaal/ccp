import './App.scss';
import React from "react";
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './pages/Home';
import Address from "./pages/Address";
import Transactions from "./pages/Transactions";

function App() {

  return (
      <BrowserRouter>
          <Route path="/" exact component={Home} />
          <Route path="/address" component={Address} />
          <Route path="/transactions" component={Transactions} />
      </BrowserRouter>
  );
}

export default App;
