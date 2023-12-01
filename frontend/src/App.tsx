import { Route, Routes } from "react-router-dom"

import ConnectionCheckPage from "./pages/ConnectionCheckPage"

const App = () => {
    return (
      <Routes>
        <Route path="/">
          <Route index element={<ConnectionCheckPage />} />
          <Route path="/user">
            <Route path="login" element={<>Hello World</>} />
          </Route>
        </Route>
      </Routes>
    )
}

export default App
