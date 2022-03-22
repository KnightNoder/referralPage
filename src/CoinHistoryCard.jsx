import './css/coinHistoryCard.css'
import CoinsOnYourWayCard from './CoinsOnYourWayCard'
import CoinHistoryOrderCard from './CoinHistoryOrderCard';
export default function CoinHistoryCard() {
    return (
        <>
            <div className="coinsHistoryCard">
                <div className='coinHistoryText'>
                    Coin History
                </div>
                <div className='coinsOnYourWay'>
                    <CoinsOnYourWayCard />
                </div>
                <div className='coinsOrderCard'>
                    <CoinHistoryOrderCard />
                    <CoinHistoryOrderCard />
                    <CoinHistoryOrderCard />
                    <div className='link'>
                        <center>
                            <a href="" className='linkToHistory'>View all</a>
                        </center>
                    </div>
                </div>
            </div>
        </>
    )
}