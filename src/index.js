import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import allReducers from './redux/reducers';
import "antd/dist/antd.css";
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import 'custom-cursor-react/dist/index.css';
import { BrowserRouter as Router, Route, Routes  ,Link , useLocation} from 'react-router-dom' 
import 'react-multi-carousel/lib/styles.css';
import "aos/dist/aos.css";
const store = createStore(allReducers)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router >
      <App />  
      </Router>
        
   
     
    </Provider>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
