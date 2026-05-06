import { Route, Routes } from 'react-router-dom'
import './App.css'
import About from './pages/About'
import Contact from './pages/Contact'
import Landingpage from './pages/Landingpage'
import Services from './pages/Services'
import PageNotFound from './pages/PageNotFound'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Landingpage />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<Contact />} />

        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </>
  )
}

export default App
