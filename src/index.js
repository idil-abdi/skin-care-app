import React from 'react'
import ReactDOM  from 'react-dom/client'

import './index.css'
import { App } from './App'

const reactContainer = document.getElementById('root')

const root = ReactDOM.createRoot(reactContainer)

root.render(<App/>)