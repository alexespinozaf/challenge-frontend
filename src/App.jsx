import React from 'react'
import Header from './components/Header'
import './Styles.css'

import {
    BrowserRouter as Router,
    Routes ,
    Route,
  } from "react-router-dom";
import User from './Users/User';
import Company from './Companies/Company';
import PageNotFount from './components/PageNotFount';
function App() {
    return (
        <Router>
         <Header />
        <Routes>
          <Route exact path="/" element={<User />} />
          <Route exact path="/company" element={<Company />} />
          <Route element={PageNotFount} />
        </Routes>
        
        </Router>

    )
}
export default App;
