import './css/redeemPopup.css'
import Container from '@mui/material/Container';
import pic from './images/goldcoin.png'
export default function () {

    return (

        <>
            <Container>

                <div className='modalContainer'>
                    <div className='modalHeader'>
                        Redeem coins
                    </div>
                    <div className='addCoins'>
                        <div className='addCoinsText'>
                            <img src={pic} alt="" /> 1000
                        </div>
                    </div>
                    <div className='coinsList'>
                        <div className='fiveHundred'>
                            <div className='fiveHundredText'>
                                500
                            </div>
                        </div>
                        <div className='thousand'>
                            <div className='thousandText'>
                                1000
                            </div>
                        </div>
                        <div className='fifteenHundred'>
                            <div className='fifteenHundredText'>
                                1500
                            </div>
                        </div>
                    </div>
                    <div className='earnAndSave'>
                        <div className='saveHeader'>
                            Earn More. Save More.
                        </div>
                        <div className='saveContent'>
                            100 coins for every referral order
                        </div>
                        <div className='saveContent bottom'>
                            Use these Coins to save on your next purchase
                        </div>
                    </div>
                    <div className='referMore'>
                        Refer 4 more friends to unlock <span style={{ color: "green", fontSize: "10px" }} className='greenText'>
                            2000 coins
                        </span>
                    </div>
                </div>
                <button id='redeemBtn' className='redeemButtonPopUp' type="button">
                    Redeem Now
                </button>
            </Container>
        </>
    )
}