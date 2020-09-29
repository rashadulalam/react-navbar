import React from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import Myroute from "./component/Myroute";

function App() {
  return (
    <>
      <BrowserRouter>
          <Myroute />
      </BrowserRouter>
    </>
  );
}

export default App;
