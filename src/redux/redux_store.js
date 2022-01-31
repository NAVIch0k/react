import { combineReducers, createStore } from "redux";
import Profile_reducer from './Profile_reducer';
import Dialog_reducer from './Dialog_reducer';
import Navbar_reducer from './Navbar_reducer';

let reducers = combineReducers({
    profile_page: Profile_reducer,
    dialog_page: Dialog_reducer,
    navbar: Navbar_reducer
})

let store = createStore(reducers)

export default store