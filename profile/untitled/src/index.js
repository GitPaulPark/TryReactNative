import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import workoutStore from "./store/WorkoutStore";
import { Provider as ReduxProvider } from 'react-redux'
import {Provider as MobxProvider} from "mobx-react";
import {stores} from "./AppStore";
import {BrowserRouter} from "react-router-dom";
import {MuiThemeProvider} from "@material-ui/core";
import configureTheme from "./AppTheme";

const theme = configureTheme();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <BrowserRouter>

    <ReduxProvider store={workoutStore}>
          <MobxProvider {...stores}>
              <MuiThemeProvider theme={theme}>
              <App />
              </MuiThemeProvider>
          </MobxProvider>
      </ReduxProvider>
    </BrowserRouter>

    // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
