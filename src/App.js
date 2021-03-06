import React from 'react';
import './App.css';
import Dialogs_cont from './components/Dialogs/Dialogs_cont.jsx';
import { Route } from 'react-router-dom';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import Music from './components/Music/Music';
import Users_cont from './components/Users/Users_cont';
import Navbar_cont from './components/Navbar/Navbar_cont';
import Header_cont from './components/Header/Header_cont';
import Login_cont from './components/Login/Login_cont';
import { connect } from 'react-redux';
import { initialize_app } from './redux/App_reducer'
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import Preloader from './components/Common/Preloader/Preloader';
import Profile_cont from './components/Profile/Profile_cont';

class App extends React.Component {

  componentDidMount() {
    this.props.initialize_app()
  }

  render() {

    if(!this.props.initialized){
      return <Preloader/>
    }

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
          <Route path='/login' render={() => <Login_cont />} />
        </div>
      </div>
    );
  }
}

const map_state_to_props=(state)=>({
  initialized:state.app.initialized
})

export default compose(
  withRouter,
  connect(map_state_to_props, {initialize_app}))(App)
