import './css/referAndEarn.css'
import gift from './images/gift2.png'
import ReferAFriend from './ReferAFriend';
import React, {Component} from 'react'

export default function ReferAndEarn() {
    return (
        <>
            <div className="referContainer">
                <div className="topDivHeading">
                    #GIFTWELLNESS
                </div>
                <div className="bottomDivHeading ">
                    <div className='bottom-div-content' id='top'>
                        For every Friend you refer, you get <span className='refer-bold'>100 Mcash credits</span>  for their future purchases.
                    </div>
                    <div className='bottom-div-content' id='bottom'>
                     Redeem credits for <span className='refer-bold'> Amazon Gift Vouchers.</span>
                    </div>
                </div>
                <div className='coupon-image-div'>
                    <img className='coupon-image' src="https://cdn.shopify.com/s/files/1/0607/6029/3588/files/gift-coupon.png?v=1653388246" alt="" srcset="" />
                </div>
                <div>
                </div>
                <ReferAFriend />
            </div>
        </>
    )
}