import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ListStudentComponent from './components/ListStudentComponent'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Router>
        <HeaderComponent />

        <div className="container">
          <Routes>
            <Route path='/' element={<ListStudentComponent />}></Route>
            <Route path='/students' element={<ListStudentComponent />}></Route>
          </Routes>
        </div>

        <FooterComponent />
      </Router>
    </div>
  )
}

export default App
