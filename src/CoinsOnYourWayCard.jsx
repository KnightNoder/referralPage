import './css/coinHistoryCard.css'
import pic from './images/live.png'
import React, {Component} from 'react'
export default function CoinsOnYourWayCard({coins_on_way}) {
    return (
        <>
            <div className="onWayCard">
                <div className='live'>
                    <img src={pic} className="livePic" alt="" />
                </div>
                <div className='onYourWayData'>
                    <div className="onWayCardBody">
                        {/* <span className='darkGreenText'> 200 </span> */}
                        <span className='credits'> {coins_on_way} MCash Credits</span> are on your way!
                    </div>
                    <div className="historyTag">
                        200 MCash Credits will be added once your referral receives their order
                    </div>
                </div>
            </div>
        </>
    )
}

