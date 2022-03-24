import CoinHistoryOrderCard from './CoinHistoryOrderCard';
import CoinBurnHistoryOrderCard from './CoinBurnHistoryOrderCard';
import './css/RewardsAndBurns.css'
import './css/coinHistoryCard.css'
import { useState } from 'react';
const RewardsAndBurns = () => {
    const [trackHistory,setTrackHistory] = useState(false)
    const [buttonsState,setButtonState] = useState({
        rewardsButtonColor: "white",
        burnsButtonColor:"#ebebeb",
        rewardsButtonTextColor:"red",
        burnsButtonTextColor:"black"
    })
    const showRewards = () =>{
        setTrackHistory(false);
        setButtonState({
            rewardsButtonColor: "white ",
            burnsButtonColor:"#ebebeb",
            rewardsButtonTextColor:"red",
            burnsButtonTextColor:"black"
        })
        console.log(buttonsState,'buttonState')
    }
    const showBurns = () => {
        setTrackHistory(true);
        setButtonState({
            rewardsButtonColor: "#ebebeb",
            burnsButtonColor:"white",
            rewardsButtonTextColor:"black",
            burnsButtonTextColor:"red"

        })
        console.log(buttonsState,'buttonState')
    }

    const {rewardsButtonColor,burnsButtonColor,rewardsButtonTextColor,burnsButtonTextColor } = buttonsState;
  return (
    <>
        <div className='rewardsAndBurnsContainer'>
            <div className="rewardsAndBurnsHeading">
                History
            </div>
            <div className='toggleButtons'>
                <button className='rewards' style={{backgroundColor: rewardsButtonColor, color:rewardsButtonTextColor }} onClick={showRewards}> 
                    Rewards
                </button>
                <button className='burns' style={{backgroundColor: burnsButtonColor, color: burnsButtonTextColor}} onClick={showBurns}>
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