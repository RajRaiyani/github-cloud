import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStoreProvider } from './services/context/GlobalStoreContext';
import App from './App.jsx'

import './styles/index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStoreProvider>
        <App />
      </GlobalStoreProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
