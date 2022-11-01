import React from 'react'
import { Container } from '@material-ui/core';
import { BrowserRouter, Route,  Switch, Redirect } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';


import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home'
import Auth from './components/Auth/Auth';
import PostDetails from './components/PostDetails/PostDetails';

const App = () => {
  const user = JSON.parse(localStorage.getItem('profile'))

  return (
    <GoogleOAuthProvider clientId={`918740139713-fl9cfss892crt46qcrmpadkqeu524f6m.apps.googleusercontent.com`} >
      <BrowserRouter>
        <Container maxWidth='lg'>
      <Navbar/>
      <Switch>
        <Route path="/" exact component={() => <Redirect to="/posts" />}/>
        <Route path="/posts" exact component={Home} />
        <Route path="/posts/search" exact component={Home} />
        <Route path="/posts/:id" exact component={PostDetails} />
        <Route path="/auth" exact component={() => (!user ? <Auth /> : <Redirect to="/posts" />)}/>
      </Switch>
        </Container>
      </BrowserRouter>
    </GoogleOAuthProvider>  
  );
}

export default App;