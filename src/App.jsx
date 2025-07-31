import DefaultLayout from './layout/DefaultLayout'
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './components/path/NotFound'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout><Home /></DefaultLayout>} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App