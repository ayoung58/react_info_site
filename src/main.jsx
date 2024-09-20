import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <img src="./react-logo.png" width = "100px" />
    <h1>Fun Facts About React</h1>
    <ul>
      <li>It was released in 2013</li>
      <li>First created by Jordan Walke</li>
      <li>Well over 100K stars on Github</li>
      <li>Is maintained by Facebook!</li>
    </ul>
  </StrictMode>,
)
