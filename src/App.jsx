import { createContext, useMemo, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Inputsss from './component/Inputsss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Tabless from './component/Tabless'




export const contextt=createContext()
function App() {
  const [count, setCount] = useState("")
  const [num,setnum]=useState(0)
  const [data,setdata]=useState([])


  // const divs=useRef()
  // const fn=()=>{
  //   divs.current.style.backgroundColor="blue"

  // }
  
  const fdd=useMemo(()=>{
    setCount(true)
    setCount(!count)

  },[])
 



  return (
    <>
    
      <contextt.Provider value={{num,setnum,data,setdata}}>
      <Routes>
      <Route path='/' element={<Inputsss/>}></Route>
      <Route path='/table' element={<Tabless/>}></Route>
      </Routes>
      </contextt.Provider>
    


   

     {/* <button onClick={fdd}>click</button>



     <div style={{width: "100px", height: "100px",backgroundColor:count===true?"red":"blue"}}  >
      
     </div> */}
     {/* <Inputsss/> */}
    </>
  )
}

export default App
