import { useEffect, useState } from 'react';
import sharePic from './images/share.png'
import './css/referAFriend.css'
// import pic from './images/share.jpg'
export default function ReferAFriend() {
    const [isMobile,SetIsMobile] = useState(false)
    useEffect(()=>{
        SetIsMobile(window.innerWidth > 480 ? true : false)
        console.log(isMobile,'IS mobile')
    })
    return (
        <>
            <div className="referAFriendContainer">
                <div className="refer">
                    My Referral Code
                </div>
                <div className="code">
                    <div className="coupon">
                        <div className="couponText">
                            USERNAME1938
                        </div>
                        {/* <button className='copyCoupon' type='button'>
                            <p className='copyCouponText'>
                                Copy
                            </p>
                        </button> */}
                    </div>
                    <div className="referFriend">
                        <img src={sharePic} alt="" className='sharePic'  />
                        {
                            !isMobile ? 
                                <div className="referText" style={{fontSize:"15px"}}>
                                    Refer Now
                                </div> : 
                                <div className="referText">
                                    Refer a friend
                                </div>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}