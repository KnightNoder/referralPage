import React, {Component} from 'react'
import { useEffect, useState } from 'react';
import sharePic from './images/share.png'
import './css/referAFriend.css'
import axios from 'axios';

export default function ReferAFriend() {
    const [isMobile,SetIsMobile] = useState(false);
    const [clicked,Set_clicked] = useState(false);
    const [referral_code,Set_referral_code] = useState('');
   
    useEffect(()=>{
        SetIsMobile(window.innerWidth > 480 ? true : false)
        const data = {
            "customer_id":"4320944390308"
        }
        const getReferralCode = () =>{
            const config = {
                method: 'post',
                url : `http://${process.env.REACT_APP_REFERRAL_BASE_URL}/referral/createReferral`,
                headers: { 
                'Content-Type': 'application/json'
                },
                data : data
            }
            axios(config).then((response) =>{
                Set_referral_code(response.data.body.referral_code);
            }).catch((error)=>{
                console.log(error,'error');
            })
            config.url= `http://${process.env.REACT_APP_REFERRAL_BASE_URL}/referral/checkBalance`
            
        }
        getReferralCode();
    },[])

    const copyToClipBoard = (obj) => {
        obj.target.innerHTML = "Copied";
        Set_clicked(true);
        navigator.clipboard.writeText(referral_code)
    }
    return (
        <>
            <div className="referAFriendContainer">
                <div className="refer"> 
                    My Referral Code
                </div>
                <div className="code">
                    <div className="coupon">
                        <div className="couponText">
                            {referral_code.toUpperCase()}
                        </div>
                        <div className='copyCouponDiv'>
                            <button onClick={(e) => copyToClipBoard(e)} className={`copyCoupon ${clicked? "copy-green" : ""}`} type='button'>
                                    Copy Code
                            </button>
                        </div>
                    </div>
                    <div className='refer-friend-container'>
                        <div className="referFriend">
                            <div className='share-img-div'>
                                <img src={sharePic} alt="" className='sharePic'  />
                            </div>
                            <div className="referText">
                                Refer A Friend
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}