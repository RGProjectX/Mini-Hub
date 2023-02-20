import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

import "@fontsource/poppins"
import customTheme from '../theme'
import { AuthProvider } from "./api";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <ChakraProvider theme={customTheme}>
    <AuthProvider>
      <App />
    </AuthProvider>
    </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
)
