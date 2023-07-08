import { useEffect, useState } from 'react'

import './App.css'
import Home from './component/Home'
import Header from './component/Header'
import { ThemeContext } from './component/ThemeContext'

function App() {

  const [theme, setTheme] = useState('dark')
  const [ statusbar, setStatusbar] = useState(false)
  useEffect(() => {
    setTheme(localStorage.getItem('theme') ? localStorage.getItem('theme'): 'dark') 
  }, [])

  console.log(statusbar);

  return (
    <ThemeContext.Provider value={{theme,setTheme,statusbar, setStatusbar}}>

      <div className={`${theme} 
    ${theme == 'dark' ? 'bg-[#121212]' : null} min-h-[100vh]`}>
        <Header/>
        <Home />
      </div>

    </ThemeContext.Provider>


  )
}

export default App
