import CoinBurnHistoryOrderCard from './CoinBurnHistoryOrderCard';
import CoinsOnYourWayCard from './CoinsOnYourWayCard'
import EarningsCard from './EarningsCard';
import SpendingsCard from './SpendingsCard';
import VouchersCard from './VouchersCard';
import './css/RewardsAndBurns.css'
import './css/coinHistoryCard.css'
import { useState } from 'react';
import React, {Component} from 'react'
const RewardsAndBurns = ({user_data}) => {
    const [trackHistory,setTrackHistory] = useState(false)
    const [buttonsState,setButtonState] = useState({
        earningsButtonColor: "white",
        earningsButtonTextColor:"#FE8276",
        earnings: true,
        spendsButtonColor:"#ebebeb",
        spendsButtonTextColor:"black",
        spends: false,
        vouchersButtonColor: "#ebebeb",
        vouchersButtonTextColor:"black",
        vouchers: false

    })

    const showEarnings = () =>{
        setButtonState({
            earningsButtonColor: "white",
            earningsButtonTextColor:"#FE8276",
            earnings: true,
            spendsButtonColor:"#ebebeb",
            spendsButtonTextColor:"black",
            spends: false,
            vouchersButtonColor: "#ebebeb",
            vouchersButtonTextColor:"black",
            vouchers: false
        })
    }
    const showSpending = () => {
        setButtonState({
            earningsButtonColor: "#ebebeb",
            earningsButtonTextColor:"black",
            earnings: false,
            spendsButtonColor:"white",
            spendsButtonTextColor:"#FE8276",
            spends: true,
            vouchersButtonColor: "#ebebeb",
            vouchersButtonTextColor:"black",
            vouchers: false
        })
    }

    const showVouchers = () => {
        setButtonState({
            earningsButtonColor: "#ebebeb",
            earningsButtonTextColor:"black",
            earnings: false,
            spendsButtonColor:"#ebebeb",
            spendsButtonTextColor:"black",
            spends: false,
            vouchersButtonColor: "white",
            vouchersButtonTextColor:"#FE8276",
            vouchers: true
        })
    }

  return (
    <>
        <div className='rewardsAndBurnsContainer'>
            <div className="rewardsAndBurnsHeading">
                History
            </div>
            <div className='toggleButtons'>
                <button className='rewards' style={{backgroundColor: buttonsState.earningsButtonColor, color: buttonsState.earningsButtonTextColor }} onClick={showEarnings}> 
                    Earnings
                </button>
                <button className='rewards' style={{backgroundColor: buttonsState.spendsButtonColor, color: buttonsState.spendsButtonTextColor}} onClick={showSpending}>
                    Spends
                </button>
                <button className='rewards' style={{backgroundColor: buttonsState.vouchersButtonColor, color: buttonsState.vouchersButtonTextColor}} onClick={showVouchers}>
                    My Vouchers
                </button>
            </div>  
            {/* <div className='coinsOrderCard' style={{marginTop:"25px"}}>
                {
                trackHistory ? <CoinHistoryOrderCard /> : null
                }
                {
                trackHistory ? <CoinHistoryOrderCard /> : null
                }
                {
                trackHistory ? <CoinHistoryOrderCard /> : null
                }
                {
                trackHistory ? <CoinHistoryOrderCard /> : null
                }
                {
                !trackHistory? <CoinBurnHistoryOrderCard/> :  null
                }
                {
                !trackHistory? <CoinBurnHistoryOrderCard/> :  null
                }
                {
                !trackHistory? <CoinBurnHistoryOrderCard/> :  null
                }
                {
                !trackHistory? <CoinBurnHistoryOrderCard/> :  null
                }
            </div> */}
                {buttonsState.earnings && user_data.rewards_list.map((item,key)=> (
                    <EarningsCard key={key} item={item} />
                ))}
                {buttonsState.spends && user_data.rewards_list.map((item,key)=> (
                    <SpendingsCard key={key} item={item} />
                ))}
                {buttonsState.vouchers && user_data.rewards_list.map((item,key)=> (
                    <VouchersCard key={key} item={item} />
            ))}
        </div>
    </>
  )
}

export default RewardsAndBurns