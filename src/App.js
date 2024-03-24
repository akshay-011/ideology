import React, { Component } from 'react';
import './App.css';
import Home from './entrepreneur/home/Home';
import HomeBusiness from './businessman/home/HomeBusiness';
import SplashScreen from "./splashscreen/SplashScreen"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./login/Login"
import SignUp from "./signup/SignUp"
import IdeaForm from './idea-form/IdeaForm';
import DevHome from './developer/home/DevHome';

class App extends Component {
  render() {
    return (
        <Router>
          <div className="App">
            <Routes>
              <Route path='/' element={<SplashScreen />} />
              <Route path='login' element={<Login />} />
              <Route path='/signup' element={<SignUp />} />
              <Route path='/entrepreneur/home' element={<Home />} />
              <Route path='/businessman/home' element={<HomeBusiness />} />
              <Route path='/ideas/add'  element={<IdeaForm />} />
              <Route path='/developer/home' element={<DevHome />} />
            </Routes>
          </div>
        </Router>
    );
  }
}

export default App;
