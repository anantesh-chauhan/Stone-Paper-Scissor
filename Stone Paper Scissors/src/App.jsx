
import './App.css'
import NavBar from './NavBar'
import Textform from './Textform'
import Text from './Text'
import Numbers from './Numbers'
import Nav from './Game/Nav' 
import Body from './Game/Body'
import About from './About'
import { useState } from 'react'

function App() {
   const [mode,setMode]=useState('light')
  return (
    <>
      <Nav mode={mode}/>
      {/* <About/> */}
      {/* <Body /> */}
      <Body/>
      {/* <NavBar title="Anantesh" about="About"/> */}
      {/* <div className='container my-3'> <Textform heading="Enter the text to Analyse"/></div> */}
      {/* <div className="container"> <Text heading="Enter Text" /></div> */}
      {/* <div className="container"> <Numbers></Numbers> </div> */}
      {/* <h1 >  This is Anantesh . </h1> */}
    </>
  )
}

export default App
