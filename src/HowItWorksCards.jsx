import HowItWorksImageCard from './HowItWorksImageCard';
import CoinHistoryCard from './CoinHistoryCard';
import './css/howItWorksCards.css'
import React, {Component} from 'react'
export default function HowItWorksCards({user_data}) {
    return (
        <>
            <div className='howItWorksSectionCard'>
                <HowItWorksImageCard />
                {/* <HowItWorksImageCard /> */}
                {/* <CoinHistoryCard /> */}
            </div>
                <CoinHistoryCard user_data={user_data}/>
        </>
    )
}
