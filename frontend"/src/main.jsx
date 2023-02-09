import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

import "@fontsource/poppins"
import customTheme from '../theme'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <ChakraProvider theme={customTheme}>
    
    <App />
    </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
)
