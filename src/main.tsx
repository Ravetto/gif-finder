import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { GifFinder } from './GifFinder'
// import { CounterApp } from './counter/components/CounterApp'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GifFinder />
    {/* <CounterApp /> */}
  </StrictMode>,
)
