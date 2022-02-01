import React from 'react';
import './App.css';
import Dialogs_cont from './components/Dialogs/Dialogs_cont.jsx';
import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Profile from './components/Profile/Profile.jsx';
import { Route, Routes } from 'react-router-dom';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import Music from './components/Music/Music';

const App = (props) => {
  return (
    <div className='page'>
      <Header />
      <Navbar nav_bar={props.state.navbar} />
      <div className='content'>
        <Routes>
          <Route path='/dialogs/*' element={<Dialogs_cont store={props.store}/>} />
          <Route path='/profile/*' element={<Profile store={props.store}/>} />
          <Route path='/news/*' element={<News />} />
          <Route path='/settings/*' element={<Settings />} />
          <Route path='/music/*' element={<Music />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
