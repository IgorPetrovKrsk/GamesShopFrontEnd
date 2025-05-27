import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Nav'
import Home from './pages/Home'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import CreateForm from './pages/createForm/CreateForm'
import ProtectedRoutes from './components/ProtectedRoutes'
import AuthPage from './pages/AuthPage.mjs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/auth' element={<AuthPage />} />
        <Route element={<ProtectedRoutes />}>
          <Route path='/create' element={<CreateForm />} />
          <Route path='/dashboard' element={<CreateForm />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>


    </>
  )
}

export default App
