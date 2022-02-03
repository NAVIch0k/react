import React from 'react';
import './App.css';
import Dialogs_cont from './components/Dialogs/Dialogs_cont.jsx';
import Header from './components/Header/Header.jsx';
import Profile from './components/Profile/Profile.jsx';
import { Route, Routes } from 'react-router-dom';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import Music from './components/Music/Music';
import Users_cont from './components/Users/Users_cont';
import Navbar_cont from './components/Navbar/Navbar_cont';

const App = (props) => {
  return (
    <div className='page'>
      <Header />
      <Navbar_cont />
      <div className='content'>
        <Routes>
          <Route path='/dialogs/*' element={<Dialogs_cont/>} />
          <Route path='/profile/*' element={<Profile/>} />
          <Route path='/news/*' element={<News />} />
          <Route path='/settings/*' element={<Settings />} />
          <Route path='/music/*' element={<Music />} />
          <Route path='/users/*' element={<Users_cont />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
