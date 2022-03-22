import './css/referAFriend.css'
// import pic from './images/share.jpg'
export default function ReferAFriend() {
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
                        <div className="referText">
                            Refer a friend
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}