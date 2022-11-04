import React from 'react';

import '../styles/globals.css';

import type { AppProps } from 'next/app';

// /.imports

export default function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}
