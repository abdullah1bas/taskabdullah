import { Outlet } from 'react-router'
import './App.css'
import Header from './components/Header'

function App() {
  return (
    <div className="app relative">
      <Header />

      <div className="pt-16">
        <Outlet />
      </div>
    </div>
  )
}

export default App
