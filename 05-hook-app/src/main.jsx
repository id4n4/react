import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'
// import { HookApp } from './HookApp'
// import { CounterApp } from './01-useState/CounterApp'
// import { CounterWithCustomHooks } from './01-useState/CounterWithCustomHooks'
import { SimpleForm } from './02-useEffect/SimpleForm'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SimpleForm />
  </React.StrictMode>,
)
