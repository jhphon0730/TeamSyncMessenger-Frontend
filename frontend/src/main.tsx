import {createRoot} from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from './App'

import './styles/style.css'
import { CookiesProvider } from 'react-cookie'

const container = document.getElementById('root')

const root = createRoot(container!)

root.render(
  <BrowserRouter>
    <CookiesProvider>
      <App/>
    </CookiesProvider>
  </BrowserRouter>
)
