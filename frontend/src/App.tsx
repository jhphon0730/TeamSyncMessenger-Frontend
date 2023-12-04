import { Route, Routes } from "react-router-dom"

import ConnectionCheckPage from "./pages/ConnectionCheckPage"
import LoginPage from "./pages/user/LoginPage"
import RegisterPage from "./pages/user/RegisterPage"

import GatewayOutlet from "./pages/outlet/GatewayOutlet"

const App = () => {
    return (
      <Routes>
        <Route path="/" element={<GatewayOutlet />}>
          <Route index element={<ConnectionCheckPage />} />
          <Route path="/user">
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
          </Route>
        </Route>
        <Route path="/app">
          <Route index element={<>App Page</>} />
        </Route>
      </Routes>
    )
}

export default App
