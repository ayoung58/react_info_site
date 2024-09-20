import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './Components/Header';
import Body from './Components/Body';
import Footer from './Components/Footer';

function App() {
  return(
    <div className='flex flex-col h-screen bg-mid-gray bg-[url("./main-react-logo.png")] bg-no-repeat bg-[right_75%]' >
      <Header />
      <Body />
      <Footer />
    </div>
  )
}
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
