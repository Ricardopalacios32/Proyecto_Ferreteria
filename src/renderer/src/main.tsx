import './assets/main.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRouter from './router'
import { InventoryProvider } from './context/inventoryContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <InventoryProvider>
      <AppRouter />
    </InventoryProvider>
  </React.StrictMode>
)
