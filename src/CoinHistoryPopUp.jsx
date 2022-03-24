import CoinHistoryOrderCard from './CoinHistoryOrderCard';
import Container from '@mui/material/Container';
import './css/coinHistoryCard.css'

const CoinHistoryPopUp = () => {
  return (
    <>
        <div className='popUpContainer'>
            <div className='coinHistoryPopUpHeader'>
                Coin History
            </div>
            <div className='coinsOrderCard'>
                <CoinHistoryOrderCard />
                <CoinHistoryOrderCard />
                <CoinHistoryOrderCard />
            </div>
        </div>
    </>
  )
}

export default CoinHistoryPopUp