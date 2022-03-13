import { applyMiddleware, combineReducers, createStore } from "redux";
import Profile_reducer from './Profile_reducer';
import Dialog_reducer from './Dialog_reducer';
import Navbar_reducer from './Navbar_reducer';
import Users_reducer from "./Users_reducer";
import Auth_reducer from "./Auth_reducer";
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'
import App_reducer from "./App_reducer";

let reducers = combineReducers({
    profile_page: Profile_reducer,
    dialog_page: Dialog_reducer,
    navbar: Navbar_reducer,
    user_page:Users_reducer,
    auth:Auth_reducer,
    form:formReducer,
    app:App_reducer
})

let store = createStore(reducers,applyMiddleware(thunkMiddleware))
window.store=store
export default store
