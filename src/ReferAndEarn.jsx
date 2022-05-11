import './css/referAndEarn.css'
import gift from './images/gift2.png'
import React, {Component} from 'react'

export default function ReferAndEarn() {
    return (
        <>
            <div className="referContainer">
                <div className="topDivHeading">
                    Refer and Earn
                </div>
                <div className="bottomDivHeading ">
                    <div className='bottom-div-content' id='top'>
                        Earn <span className='refer-bold'>100 coins</span>  for every referral order.
                    </div>
                    <div className='bottom-div-content' id='bottom'>
                     Redeem coins to get <span className='refer-bold'> Amazon Gift Vouchers.</span>
                    </div>
                </div>
            </div>
        </>
    )
}