import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from "react-router-dom"
import { BudgetApp } from './components/BudgetApp'
import './index.css'

ReactDOM.render(
  <Router>
      <BudgetApp />
  </Router>
  , document.getElementById('root'))

