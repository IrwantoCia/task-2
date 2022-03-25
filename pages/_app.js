import '../styles/globals.css'
import React from "react";
import {Provider, useStore} from "react-redux";
import {store} from '../store'


function MyApp({Component, pageProps}) {
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    )
}

export default MyApp
