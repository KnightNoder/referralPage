import React, {Component} from 'react'
import './css/coinHistoryOrderCard.css'
import pic from './images/voucher.png';
import copyPic from './images/copy.png'
import amazon from './images/amazon.png'
import calenderPic from './images/calender.png';
import coinPic from './images/500coin.jpg';
import { useEffect } from 'react';

export default function VouchersCard({item}) {
    const date = new Date(item.createdAt);
    const required_date = `${date.getDate()} ${date.toLocaleString('en-US', {month: 'short'})} ${date.getFullYear()} `
   
    return (
        <>
            <div className='orderCardContainer'>
                <img className='fire' src={pic} alt="" />
                <div className='historyContentCard'>
                    <div className='historyContent2'>
                        <div className='left-section'>
                            <div className='amazon-coupon'>
                                USERNAME1938
                                <img className='copy-border' src={amazon} alt="" />
                            </div>
                            <div className='coupon-description'>
                                Flat 500 off
                            </div>
                        </div>
                        <div className='right-section'>
                            <div className='coupon-status'>
                                <span className='status-dot'></span>  Active
                            </div>
                            <div className='copy-coupon'>
                                <button className='copy-coupon-button'>
                                    <img className='coupon-pic' src={copyPic} alt="" />
                                    Copy code
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='historyInfo'>
                        <img src={calenderPic} className='calender' alt="" />
                        <span className='historyDate'> Redeemed 500 coins on {required_date}</span>
                    </div>
                </div>
            </div>
        </>
    )
}