import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import { DataContextProvider } from './contexts/DataContext.tsx'
import { router } from './routes/router.tsx'

import IsActiveProvider from './providers/IsActiveProvider.tsx'
import './style.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <DataContextProvider>
      <IsActiveProvider>
        <RouterProvider router={router} />
      </IsActiveProvider>
    </DataContextProvider>
  </React.StrictMode>
)
