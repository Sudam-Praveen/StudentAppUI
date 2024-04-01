import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ListStudentComponent from './components/ListStudentComponent'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <HeaderComponent />

      <div className="container">
        <ListStudentComponent />
      </div>

      <FooterComponent/>
    </div>
  )
}

export default App
