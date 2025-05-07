import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import AddExpense from './components/AddExpense'
import Home from './pages/Home'

function App() {

  return (
    <>
      <Header /> 
      <AddExpense />
      <Home />
    </>
  )
}

export default App
