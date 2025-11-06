import { Fab, Webchat } from '@botpress/webchat'
import { useState } from 'react'
import FAQs from './FAQs'
import { Container } from 'react-bootstrap'
import { BsBack } from 'react-icons/bs'
import Prime from '../models/Prime'
// import './Faqs.css'
// import './syle.css'
function FAQs1() {
  // const [isWebchatOpen, setIsWebchatOpen] = useState(false)
  // const toggleWebchat = () => {
  //   setIsWebchatOpen((prevState) => !prevState)
  // }
  const configuration = {
    version: 'v3',
    botName: 'FAQs',
    color: '#b562d6' ,
    // themeMode: 'dark',
    headerVariant: 'dark',
    primary: '#663399',
    radius: 8,
    varient: 'transparent',
   
   
    composerPlaceholder: 'Ask me anything about my self...',

  }
  return (
    <>
      <Container fluid className='about-section'>
        {/* <Prime/> */}
        <Webchat

        className='bpContainer'
          clientId="1f944e87-a8ee-4dac-b875-e49519de86d5" // Your client ID here
          configuration={configuration}
        // style={{
        //   display: 'flex',
        //   position: 'fixed',
        //   bottom: '90px',
        //   width: '400px',
        //   height: '600px',
        //   // display: isWebchatOpen ? 'flex' : 'none',
        //   // position: 'fixed',
        //   bottom: '90px',
        //   right: '20px',
        // }}
        />

      </Container>

    </>
  )
}

export default FAQs1