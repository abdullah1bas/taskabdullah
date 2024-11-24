import { Outlet, useLocation } from 'react-router'
import './App.css'
import Header from './components/Header'

function App() {
  const location = useLocation();
  return (
    <div className="app relative">
      <Header />

      <div className={`${location.pathname !== "/" && 'pt-16'}`}>
        <Outlet />
      </div>
    </div>
  )
}

export default App
