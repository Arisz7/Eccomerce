import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { CartProvider } from './context/Context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <CartProvider>
        <App />
    </CartProvider>

)
