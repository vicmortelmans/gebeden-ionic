import React from 'react';
import { createRoot } from 'react-dom/client';
import { defineCustomElements } from '@ionic/core/loader';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Define Ionic custom elements before rendering React
defineCustomElements(window);

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App />);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
