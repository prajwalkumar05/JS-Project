import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Indicator from './components/Indicator'
import MultiStep from './components/MultiStep'
import Footer from './components/Footer'

function App() {


  return (
    <>
      <Navbar />
      <Indicator />
      <MultiStep />
      <Footer />
    </>
  )
}

export default App
