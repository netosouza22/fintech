import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import { DataContextProvider } from './contexts/DataContext.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <DataContextProvider>
                <App />
            </DataContextProvider>
        </BrowserRouter>
    </React.StrictMode>
)
