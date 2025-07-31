import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import { Outlet } from 'react-router-dom'

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto p-8 text-center">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default DefaultLayout