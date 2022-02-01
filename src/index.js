import React from 'react';
import reportWebVitals from './reportWebVitals';
import store from './redux/redux_store'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from './Store_context';

let render_tree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <React.StrictMode>
        <Provider store={store}>
          <App/>
        </Provider>
      </React.StrictMode>
    </BrowserRouter>,
    document.getElementById('root')
  );
}

render_tree(store.getState())

store.subscribe(() => {
  let state = store.getState()
  render_tree(state)
})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
