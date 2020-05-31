import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import App from "./components/App";
import { ThemeProvider } from "styled-components";

import theme from "./utils/theme";
import GlobalStyles from "./utils/global";

import { store } from "./store/store";


ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <>
                <App />
                <GlobalStyles />
            </>
        </ThemeProvider>
    </Provider>,
    document.querySelector("#root")
);