import HeaderAndMenu from './HeaderAndMenu'
import Container from '@mui/material/Container';
import ReferAndEarn from './ReferAndEarn';
import ReferAFriend from './ReferAFriend';
import WalletCards from './WalletCards';
import HowItWorksCards from './HowItWorksCards';
import { createContext, useEffect, useState } from 'react';
import './css/App.css'

const screenSizeContext = createContext();

export default function App() {
  const [screenSize,setScreenSize] = useState('')
  useEffect(()=>{
    const screenWidth = window.innerWidth;
    setScreenSize(screenWidth);
  })
  return (
    <>
      <HeaderAndMenu />
      <screenSizeContext.Provider value={screenSize}>
        <Container fixed className='mainContainer'>
          <ReferAndEarn />
          <ReferAFriend />
          <WalletCards />
          <HowItWorksCards />
        </Container>
      </screenSizeContext.Provider>
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

