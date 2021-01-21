import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import {BrowserRouter as Router} from 'react-router-dom';
// import ReactRouter from './Router/router';
import Wallpaper from './Components/Wallpaper';
import Form from './Components/Form';
import UsersList from './Components/UsersList';
import User from './Components/User';
import Truck from './Components/Truck';

ReactDOM.render(
<React.StrictMode>
  <Wallpaper/>
  <Truck/>
  <UsersList/>
  <Form/>
  <User/>
  {/* <ReactRouter/> */}
</React.StrictMode>,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
