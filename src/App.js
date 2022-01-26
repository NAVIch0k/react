import React from 'react';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs.jsx';
import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Profile from './components/Profile/Profile.jsx';
import { Route, Routes } from 'react-router-dom';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import Music from './components/Music/Music';
// https://app.mindmup.com/map/new/1580246240113
const App = (props) => {
  return (
    <div className='page'>
      <Header />
      <Navbar state={props.state.navbar} />
      <div className='content'>
        <Routes>
          <Route path='/dialogs/*' element={<Dialogs state={props.state.dialogs_page} />} />
          <Route path='/profile/*' element={<Profile state={props.state.profile_page} />} />
          <Route path='/news/*' element={<News />} />
          <Route path='/settings/*' element={<Settings />} />
          <Route path='/music/*' element={<Music />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
