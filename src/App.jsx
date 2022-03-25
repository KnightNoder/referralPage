import HeaderAndMenu from './HeaderAndMenu'
import Container from '@mui/material/Container';
import ReferAndEarn from './ReferAndEarn';
import ReferAFriend from './ReferAFriend';
import WalletCards from './WalletCards';
import HowItWorksCards from './HowItWorksCards';
import { createContext, useEffect, useState } from 'react';
import CoinsOnYourWayCard from './CoinsOnYourWayCard';
import BackNavigator from './BackNavigator';
import RewardsAndBurns from './RewardsAndBurns';
import './css/coinHistoryCard.css'
import gift from './images/celeb_best.png'
// import gift from './images/celeb-white-removebg-preview.jpg'
// import gift from './images/celeb-white.png'
// import './css/coinHistoryCard.css'
import './css/App.css'

const mobileViewContext = createContext();

export default function App() {
  const [screenSize,setScreenSize] = useState('')
  const [showHistory,setShowHistory] = useState(false)
  useEffect(()=>{
    const screenWidth = window.innerWidth;
    setScreenSize(screenWidth);
  })

  const toggleHistoryTrue = () => {
    setShowHistory(true);
  }

  const toggleHistoryFalse = () => {
    setShowHistory(false);
  } 
  console.log(screenSize,'size')
  const marginTopVal = screenSize > 480 ? "70px" : "20px"
  return (
    <>
      <HeaderAndMenu />
      <mobileViewContext.Provider value={showHistory}>
        <Container fixed className='mainContainer' style={{marginTop:marginTopVal} }>

          {showHistory ? <BackNavigator hideHistory={toggleHistoryFalse} /> : null}
          {!showHistory ? <ReferAndEarn /> : null}
          <div className='mobileReferralCode'>
            My Referral Code
          </div>
          <ReferAFriend />
          {/* {showHistory ? */}
           {/* <img src={gift} style={{backgroundColor:"white",zIndex:"1",top:"195px", 
          left:"70%" ,display:"inline", position:"absolute",height:"80px",width:"200px"}} alt="" />  */}
          {/* // : null } */}
          {/* <img src={gift} style={{backgroundColor:"white",zIndex:"1",top:"200px", 
          left:"70%" ,display:"inline", position:"absolute",height:"200px",width:"200px"}} alt="" /> */}
          {!showHistory ? <WalletCards showHistory={toggleHistoryTrue} /> : null}
          {!showHistory ? <HowItWorksCards /> : null}
          {showHistory ? <div className='coinsOnYourWay'><CoinsOnYourWayCard /></div> : null}
          {showHistory ? <RewardsAndBurns/> : null}
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

