import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

function NavBar() {
  return (
    <nav>
      <img src="./react-logo.png" width = "100px" />
    </nav>
  )
}

function Footer() {
  return (
    <footer>
      <p style={{
        fontSize: "10px"
      }}>Copyright 2024 @yalvin58 :P</p>
    </footer>
  )
}

function Page() {
  return(
    <>
      <NavBar />
      <h1>Fun Facts About React</h1>
      <ul>
        <li>It was released in 2013</li>
        <li>First created by Jordan Walke</li>
        <li>Well over 100K stars on Github</li>
        <li>Is maintained by Facebook!</li>
      </ul>
      <Footer />
    </>
  )
}
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Page />
  </StrictMode>,
)
