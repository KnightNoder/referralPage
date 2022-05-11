import React, {Component} from 'react'
import './css/coinHistoryOrderCard.css'
import pic from './images/fire.png';
import calenderPic from './images/calender.png';
import coinPic from './images/100coin.png';
export default function CoinBurnHistoryOrderCard() {
    return (
        <>
            <div className='orderCardContainer'>
                <img className='fire' src={pic} alt="" />
                <div className='historyContentCard'>
                    <div className='historyContent'>
                        Rewarded 500 coins on Order Number #123494
                    </div>
                    <div className='historyInfo'>
                        <img src={calenderPic} className='calender' alt="" />
                        <span className='historyDate'> 13 Jan 2021</span>
                        <img src={coinPic} className='coin' alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}