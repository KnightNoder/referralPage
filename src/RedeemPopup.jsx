import './css/redeemPopup.css'
import Container from '@mui/material/Container';
import pic from './images/goldcoin.png'
import minus from './images/minus.png'
import plus from './images/plus.png'
import share from './images/small-share.png'
import next from './images/next.png'
import { useState } from 'react';
import LinearProgress from '@mui/material/LinearProgress';



export default function () {
    const [redeemAmount,setRedeemAmount] = useState(500);
    const balanceAmount = 1600;
    const decrement = () => {
        if((redeemAmount-500) >=0) {
            setRedeemAmount(redeemAmount-500)
        }
    }
    const increment = () => {
        if((redeemAmount+500) <= balanceAmount){
            setRedeemAmount((redeemAmount)+500)
        }
    }
    return (

        <>
            <Container>
                <div className='modalContainer'>
                    <div className='headerContent'>
                        <div className='modalHeader'>
                            Redeem Coins
                        </div>
                        <div className='redeemCoinBalance'>
                            <div className='redeemCoinBalanceText'>
                                Balance:
                            </div>
                            <div className='redeemCoinBalanceAmount'>
                                {balanceAmount}
                            </div>
                        </div>
                    </div>
                    <div className='addCoins'>
                        <div className='minus' onClick={()=> decrement()}>
                            <img src={minus} alt="" />
                        </div>
                        <div className='addCoinsText'>
                            <img src={pic} alt="" /> {redeemAmount}
                        </div>
                        <div className='plus' onClick={()=> increment()}>
                            <img src={plus} alt="" />
                        </div>
                    </div>
                    <div className='coinsList'>
                        <div className='fiveHundred'>
                            <div className='fiveHundredText' onClick={() => setRedeemAmount(500)}>
                                500
                            </div>
                        </div>
                        <div className='thousand'>
                            <div className='thousandText' onClick={() => setRedeemAmount(1000)}>
                                1000
                            </div>
                        </div>
                        <div className='fifteenHundred'>
                            <div className='fifteenHundredText' onClick={() => setRedeemAmount(1500)}>
                                1500
                            </div>
                        </div>
                    </div>
                    <div className='earnAndSave'>
                        <div className='saveHeader'>
                            Earn More. Save More.
                        </div>
                        <div className='saveContent'>
                            <img src={share} alt="" style={{}} /> 100 coins for every referral order
                        </div>
                        <div className='saveContent bottom'>
                        <img src={next} alt="" style={{}} /> Use these Coins to save on your next purchase
                        </div>
                    </div>
                    <div className='referMore'>
                        Refer 4 more friends to unlock <span style={{ color: "green", fontSize: "10px" }} className='greenText'>
                            2000 coins
                        </span>
                    </div>
                </div>
                <div className='progressBar'>
                    <LinearProgress color='success' variant="determinate" value={80} />
                </div>
                <button id='redeemBtn' className='redeemButtonPopUp' type="button">
                    Redeem Now
                </button>
            </Container>
        </>
    )
}