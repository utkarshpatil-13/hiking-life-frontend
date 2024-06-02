import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import IndexPage from './components/IndexPage'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<IndexPage/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
