import { useEffect, useState } from 'react'

import './App.css'
import Home from './component/Home'
import Header from './component/Header'
import { ThemeContext } from './component/ThemeContext'

function App() {

  const [count, setCount] = useState(0)
  const [theme, setTheme] = useState('dark')
  useEffect(() => {
    setTheme(localStorage.getItem('theme') ? localStorage.getItem('theme'): 'dark') 
  }, [])

  return (
    <ThemeContext.Provider value={{theme,setTheme}}>

      <div className={`${theme} 
    ${theme == 'dark' ? 'bg-[#121212]' : null} h-[100vh]`}>
        <Header />
        <Home />
      </div>

    </ThemeContext.Provider>


  )
}

export default App
