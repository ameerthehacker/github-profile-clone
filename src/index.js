import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { ThemeProvider, CSSReset } from "@chakra-ui/core";

const Root = (
    <ThemeProvider>
        <CSSReset />
        <App />
    </ThemeProvider>
);

ReactDOM.render(Root, document.getElementById('root'));
