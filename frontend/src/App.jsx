import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Register from './/pages/register/Register'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path='/register' element={<Register />} />
          <Route path='/*' exact element={<Home />} />
          <Route path='/login' element={<Login />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App