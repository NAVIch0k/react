import React from 'react';
import './App.css';
import Dialogs_cont from './components/Dialogs/Dialogs_cont.jsx';
import Header from './components/Header/Header.jsx';
import { Route } from 'react-router-dom';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import Music from './components/Music/Music';
import Users_cont from './components/Users/Users_cont';
import Navbar_cont from './components/Navbar/Navbar_cont';
import Profile_cont from './components/Profile/Profile_cont';

const App = (props) => {
  return (
    <div className='page'>
      <Header />
      <Navbar_cont />
      <div className='content'>
        <Route path='/dialogs' render={() => <Dialogs_cont />} />
        <Route path='/profile' render={() => <Profile_cont />} />
        <Route path='/news' render={() => <News />} />
        <Route path='/settings' render={() => <Settings />} />
        <Route path='/music' render={() => <Music />} />
        <Route path='/users' render={() => <Users_cont />} />
      </div>
    </div>
  );
}

export default App;
