import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//Material-UI global theme
import { MuiThemeProvider } from "@material-ui/core";
import theme from "./styles/theme/theme";

//Redux
import { store } from "./redux/store/store";
import { Provider } from "react-redux";

const app = (
    <MuiThemeProvider theme={theme}>
      <Provider store ={store}>
        <App />
      </Provider>
    </MuiThemeProvider> 
)

ReactDOM.render(app, document.getElementById('root'));

