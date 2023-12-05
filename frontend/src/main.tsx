import {createRoot} from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from './App'
import { Provider } from 'react-redux'
import store from './store';
import { CookiesProvider } from 'react-cookie'

import './styles/style.css'

const container = document.getElementById('root')

const root = createRoot(container!)

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <CookiesProvider>
        <App/>
      </CookiesProvider>
    </BrowserRouter>
  </Provider>
)
