import React from 'react';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs.jsx';
import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Profile from './components/Profile/Profile.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import Music from './components/Music/Music';
// https://app.mindmup.com/map/new/1580246240113
const App = (props) => {
  return (
    <BrowserRouter>
      <div className='page'>
        <Header />
        <Navbar />
        <div className='content'>
          <Routes>
            <Route path='/dialogs/*' element={<Dialogs dialogs={props.dialogs} messages={props.messages}/>} />
            <Route path='/profile/*' element={<Profile posts={props.posts}/>} />
            <Route path='/news/*' element={<News/>}/>
            <Route path='/settings/*' element={<Settings/>}/>
            <Route path='/music/*' element={<Music/>}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
