import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

function NavBar() {
  return (
    <nav className="flex justify-between items-center p-4 shadow-md">
      <img src="./react-logo.png" className='w-14' />
      <ul className = "flex list-none">
        <li className='p-2.5'>Pricing</li>
        <li className='p-2.5'>About</li>
        <li className='p-2.5'>Contact</li>
      </ul>
    </nav>
  )
}

function Footer() {
  return (
    <footer className='flex mt-auto'>
      <p className='text-lg text-white bg-gray-500 w-screen p-3'>Copyright 2024 @yalvin58 :P</p>
    </footer>
  )
}

function Body() {
  return (
    <div className='flex flex-col p-4'>
      <h1 className='text-3xl pb-3 pt-1 font-serif font-bold'>Fun Facts About React</h1>
      <ul className = "list-disc pl-7">
        <li>It was released in 2013</li>
        <li>First created by Jordan Walke</li>
        <li>Well over 100K stars on Github</li>
        <li>Is maintained by Facebook!</li>
      </ul>
    </div>
  )
}
function Page() {
  return(
    <div className='flex flex-col h-screen'>
      <NavBar />
      <Body />
      <Footer />
    </div>
  )
}
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Page />
  </StrictMode>,
)
