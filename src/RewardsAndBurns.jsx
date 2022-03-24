import CoinHistoryOrderCard from './CoinHistoryOrderCard';
import './css/RewardsAndBurns.css'
import './css/coinHistoryCard.css'
const RewardsAndBurns = () => {
  return (
    <>
        <div className='rewardsAndBurnsContainer'>
            <div className="rewardsAndBurnsHeading">
                History
            </div>
            <div className='toggleButtons'>
                <button className='rewards'>
                    Rewards
                </button>
                <button className='burns'>
                    Burns
                </button>
            </div>  
            <div className='coinsOrderCard' style={{marginTop:"25px"}}>
                <CoinHistoryOrderCard />
                <CoinHistoryOrderCard />
                <CoinHistoryOrderCard />
                <CoinHistoryOrderCard />
            </div>
        </div>
    </>
  )
}

export default RewardsAndBurns