import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import AppContextProvider from './context/AppContext.jsx'
import ContextProvider from './context/contest.jsx'
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <ContextProvider>
    <AppContextProvider>
      
      <App />
      
    </AppContextProvider>
    </ContextProvider>
  </BrowserRouter>,
)
