import React from 'react'
import { Container } from '@material-ui/core';
import { BrowserRouter, Route,  Switch } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';


import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home'
import Auth from './components/Auth/Auth';

const App = () => {

  return (
    <BrowserRouter>
    <GoogleOAuthProvider clientId="907691688912-0i53ahg4brihb49cfe8sh884vkfd9sud.apps.googleusercontent.com" >
    <Container maxWidth='lg'>
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/auth" exact component={Auth}/>
      </Switch>
    </Container>
    </GoogleOAuthProvider>
    </BrowserRouter>
  );
}

export default App;