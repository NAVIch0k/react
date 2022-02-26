import React from 'react';
import './App.css';
import Dialogs_cont from './components/Dialogs/Dialogs_cont.jsx';
import { Route } from 'react-router-dom';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import Music from './components/Music/Music';
import Users_cont from './components/Users/Users_cont';
import Navbar_cont from './components/Navbar/Navbar_cont';
import Profile_cont from './components/Profile/Profile_cont';
import Header_cont from './components/Header/Header_cont';
import Login from './components/Login/Login';

const App = (props) => {
  return (
    <div className='page'>
      <Header_cont />
      <Navbar_cont />
      <div className='content'>
        <Route path='/dialogs' render={() => <Dialogs_cont />} />
        <Route path='/profile/:user_id?' render={() => <Profile_cont />} />
        <Route path='/news' render={() => <News />} />
        <Route path='/settings' render={() => <Settings />} />
        <Route path='/music' render={() => <Music />} />
        <Route path='/users' render={() => <Users_cont />} />
        <Route path='/login' render={() => <Login/>} />
      </div>
    </div>
  );
}

export default App;
