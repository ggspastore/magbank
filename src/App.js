import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AccountModal from './components/AccountModal';
import "./App.scss";

import Home from './views/Home';
import Login from './views/Login';

const App = () => { 
  const [ showModal, setShowModal ] = useState(false);

  return (
    <Router>
      <Navbar handleCreateAcc={() => setShowModal(true)} />

      <Switch>
        <Route path='/' exact>
          <Home handleClick={() => setShowModal(true)} />
        </Route>

        <Route path='/login' >
          <Login />
        </Route>
      </Switch>

      <Footer />
      <AccountModal show={showModal} handleClose={() => setShowModal(false)} />
    </Router>
  );  
};

export default App;
