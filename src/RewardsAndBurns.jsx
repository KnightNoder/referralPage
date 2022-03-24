import CoinHistoryOrderCard from './CoinHistoryOrderCard';
import CoinBurnHistoryOrderCard from './CoinBurnHistoryOrderCard';
import './css/RewardsAndBurns.css'
import './css/coinHistoryCard.css'
import { useState } from 'react';
const RewardsAndBurns = () => {
    const [trackHistory,setTrackHistory] = useState(false)
    const [buttonsState,setButtonState] = useState({
        rewardsButtonColor: "white",
        burnsButtonColor:"none"
    })
    const showRewards = () =>{
        setTrackHistory(false);
        setButtonState({
            rewardsButtonColor: "white",
            burnsButtonColor:"none"
        })
    }
    const showBurns = () => {
        setTrackHistory(true);
        setButtonState({
            rewardsButtonColor: "none",
            burnsButtonColor:"white"
        })
    }
  return (
    <>
        <div className='rewardsAndBurnsContainer'>
            <div className="rewardsAndBurnsHeading">
                History
            </div>
            <div className='toggleButtons'>
                <button className='rewards' onClick={showRewards}> 
                    Rewards
                </button>
                <button className='burns' onClick={showBurns}>
                    Burns
                </button>
            </div>  
            <div className='coinsOrderCard' style={{marginTop:"25px"}}>
                {
                trackHistory ? <CoinHistoryOrderCard /> : null
                }
                {
                trackHistory ? <CoinHistoryOrderCard /> : null
                }
                {
                trackHistory ? <CoinHistoryOrderCard /> : null
                }
                {
                trackHistory ? <CoinHistoryOrderCard /> : null
                }
                {
                !trackHistory? <CoinBurnHistoryOrderCard/> :  null
                }
                {
                !trackHistory? <CoinBurnHistoryOrderCard/> :  null
                }
                {
                !trackHistory? <CoinBurnHistoryOrderCard/> :  null
                }
                {
                !trackHistory? <CoinBurnHistoryOrderCard/> :  null
                }
            </div>
        </div>
    </>
  )
}

export default RewardsAndBurns