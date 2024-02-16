import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Register from './/pages/register/Register'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import About from './pages/about/About'
import Services from './pages/services/Services'
import Projects from './pages/projects/Projects'
import Contact from './pages/contact/Contact'
const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path='/register' element={<Register />} />
          <Route path='/*' exact element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/services' element={<Services />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App