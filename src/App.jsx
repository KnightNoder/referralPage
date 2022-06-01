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
import React, {Component} from 'react'
import {render} from 'react-dom';
import axios from 'axios'
import './css/coinHistoryCard.css'
// import gift from './images/celeb-white-removebg-preview.jpg'
// import gift from './images/celeb-white.png'
// import './css/coinHistoryCard.css'
import './css/App.css'

const mobileViewContext = createContext();

export default function App() {
  const [screenSize,setScreenSize] = useState('')
  const [showHistory,setShowHistory] = useState(false)
  const [user_data,Set_user_data] = useState({
    "balance":"",
    "lifetime":"",
    "coins_on_way":"",
    "total_earnings":"",
    "rewards_list":[]
})
  useEffect(()=>{
    const screenWidth = window.innerWidth;
    setScreenSize(screenWidth);
    const data = {
      "customer_id":"4320944390308"
  }
  const getEarningsData = async () => {
      const config = {
          method: 'post',
          mode: 'cors',
          url : `http://${process.env.REACT_APP_REFERRAL_BASE_URL}/referral/checkBalance`,
          headers: { 
          'Content-Type': 'application/json'
          },
          data : data
      }
       await axios(config).then((response) =>{
          const ledger = [
            {
                "createdAt": "2022-04-15T08:33:17.000Z",
                "value": 100,
                "type": "credit",
                "status": "pending",
                "voucher_code": "0",
                "order": "1020"
            },
            {
                "createdAt": "2022-04-14T08:26:39.000Z",
                "value": 100,
                "type": "credit",
                "status": "rewarded",
                "voucher_code": "0",
                "order": "1016"
            },
            {
              "createdAt": "2022-04-14T08:20:44.000Z",
              "value": 100,
              "type": "credit",
              "status": "rewarded",
              "voucher_code": "0",
              "order": "1234"
           },
           {
              "createdAt": "2022-04-14T08:19:33.000Z",
              "value": 100,
              "type": "credit",
              "status": "rewarded",
              "voucher_code": "0",
              "order": "1234"
           }
        ]

        response.data.body.ledger =  ledger;
        const rewards =  response.data.body.ledger.filter((x) => x.status == 'pending')
        const rewards_array = response.data.body.ledger.filter((x) => x.status != 'pending')
        const totalEarnings = rewards_array.reduce((sum,current) =>  sum + current.value,0)
          Set_user_data({
              "balance": response.data.body.balance,
              "lifetime": response.data.body.lifetime,
              "coins_on_way": rewards[0].value,
              "total_earnings": totalEarnings,
              "rewards_list": rewards_array
          });
      }).catch((error)=>{
          console.log(error,'error');
      })
  }

  getEarningsData()
  },[])

  const toggleHistoryTrue = () => {
    setShowHistory(true);
  }

  const toggleHistoryFalse = () => {
    setShowHistory(false);
  } 
  const marginTopVal = screenSize > 480 ? "70px" : "20px"
  return (
    <>
        {/* <Container fixed className='mainContainer' style={{marginTop:marginTopVal} }> */
        //    <div className='mobileReferralCode'>
        //    My Referral Code
        //  </div>
        //  <ReferAFriend />
        }
        <div  className='mainContainer' style={{marginTop:marginTopVal} }>
          {showHistory ? <BackNavigator hideHistory={toggleHistoryFalse} /> : null}
          {!showHistory ? <ReferAndEarn /> : null}
          {!showHistory ? <WalletCards user_data={user_data} showHistory={toggleHistoryTrue} /> : null}
          {!showHistory ? <HowItWorksCards user_data={user_data} /> : null}
          {showHistory ? <div className='coinsOnYourWay'><CoinsOnYourWayCard coins_on_way={user_data.coins_on_way} /></div> : null}
          {showHistory ? <RewardsAndBurns user_data={user_data}/> : null}
        </div>
     </>
  );
}


