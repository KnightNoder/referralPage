import HeaderAndMenu from './HeaderAndMenu'
import Container from '@mui/material/Container';
import ReferAndEarn from './ReferAndEarn';
import ReferAFriend from './ReferAFriend';
import WalletCards from './WalletCards';
import HowItWorksCards from './HowItWorksCards';
import { createContext, useEffect, useState } from 'react';
import './css/App.css'

const mobileViewContext = createContext();

export default function App() {
  const [screenSize,setScreenSize] = useState('')
  const [showHistory,setShowHistory] = useState(false)
  useEffect(()=>{
    const screenWidth = window.innerWidth;
    setScreenSize(screenWidth);
  })

  const toggleHistory = () => {
    setShowHistory(true);
  }
  const marginTopVal = screenSize > 480 ? "70px" : "20px"
  return (
    <>
      <HeaderAndMenu />
      <mobileViewContext.Provider value={showHistory}>
        <Container fixed className='mainContainer' style={{marginTop:marginTopVal} }>
          {!showHistory ? <ReferAndEarn /> : null}
          <ReferAFriend />
          {!showHistory ? <WalletCards showHistoryFunc={toggleHistory} /> : null}
          {!showHistory ? <HowItWorksCards /> : null}
        </Container>
      </mobileViewContext.Provider>
      {/* <div className='mainContainer'>
        <ReferAndEarn />
        <ReferAFriend />
        <WalletCards />
        <HowItWorksCards />
      </div> */}
      {/* <Container className='mainContainer'>
        <HeaderLinks />
      </Container> */}
    </>
  );
}

