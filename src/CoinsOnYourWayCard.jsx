import './css/coinHistoryCard.css'
import pic from './images/live.png'
export default function CoinsOnYourWayCard() {
    const screenWidth = window.innerWidth;
    const customStyle = {height:"20px",width:"20px"}
    return (
        <>
            <div className="onWayCard">
                <div className='live'>
                    <img src={pic}  alt="" />
                </div>
                <div className='onYourWayData'>
                    <div className="onWayCardBody">
                        {/* <span className='darkGreenText'> 200 </span> */}
                        200 coins are on your way!
                    </div>
                    <div className="historyTag">
                        200 coins will be added once your referral receives their order
                    </div>
                </div>
            </div>
        </>
    )
}

