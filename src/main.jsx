import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Paragraph, Button, Greet, Image } from './App.jsx'
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
    <Paragraph content="Look at the cool backgorund i found on ReactBits" />
    <Paragraph content="Less cool but there is also a button" className="second-paragraph" />
    <Button btnName='This is a button' />
    <Paragraph content="and this is a row of random photos" className="second-paragraph" />
    <div className='bottom-section'>
    <Image id = "32" />
    <Image id = "43" />
    <Image id = "54"  />
    <Image id = "14" />
    </div>
  </StrictMode>,
)
