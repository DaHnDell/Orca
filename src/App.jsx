import DefaultLayout from './layout/DefaultLayout'
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './components/path/NotFound'
import { Routes, Route } from 'react-router-dom'
import Contact from './pages/Contact'
import Service from './pages/Service'
import Solution from "./pages/Solution.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<Home />} />
        <Route path="solution" element={<Solution />} />
        <Route path="service" element={<Service />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App