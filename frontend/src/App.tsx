import { Route, Routes } from "react-router-dom"

import ConnectionCheckPage from "./pages/ConnectionCheckPage"

const App = () => {
    return (
      <Routes>
        <Route path="/" element={<ConnectionCheckPage />} />
      </Routes>
    )
}

export default App
