import React from 'react'
import { Container } from '@material-ui/core';
import { BrowserRouter, Route,  Switch } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';


import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home'
import Auth from './components/Auth/Auth';

const App = () => {

  return (
    <GoogleOAuthProvider clientId={`918740139713-fl9cfss892crt46qcrmpadkqeu524f6m.apps.googleusercontent.com`} >
      <BrowserRouter>
        <Container maxWidth='lg'>
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/auth" exact component={Auth}/>
      </Switch>
        </Container>
      </BrowserRouter>
    </GoogleOAuthProvider>  
  );
}

export default App;