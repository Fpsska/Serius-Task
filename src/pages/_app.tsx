import React from 'react';

import { Provider } from 'react-redux';

import { store } from '../../store/store';

import Layout from '../components/Layout';

import type { AppProps } from 'next/app';
import '../styles/globals.css';

// /.imports

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <Provider store={store}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </Provider>
    );
};

export default App;
