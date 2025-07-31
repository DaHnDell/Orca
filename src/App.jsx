import DefaultLayout from './layout/DefaultLayout'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route element={<DefaultLayout/>}>
        <Route path="/" element={<Home/>} />
      </Route>
    </Routes>
  )
}

export default App