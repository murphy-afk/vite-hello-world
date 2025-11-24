import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Paragraph, Button, Greet } from './App.jsx'
import Plasma from './Plasma';


createRoot(document.getElementById('root')).render(
  <StrictMode>
{/**********************************/}
    {/* from ReactBits  */}
      <Plasma
    color="#3e70d3"
    speed={0.6}
    direction="forward"
    scale={1.1}
    opacity={0.4}
    mouseInteractive={false}
      />
{/***********************************/}
    {/* <App /> */}
    <Greet name='You' />
    <Paragraph />
    <Button />
  </StrictMode>,
)
