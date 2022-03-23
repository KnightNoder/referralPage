import './css/walletCards.css'
import CoinBalanceCard from './CoinBalanceCard'
import pic from "./images/WalletCardImage.jpg"

export default function WalletCards() {
    return (
        <>
            <div className='walletCardsContainer'>
                <img src={pic} className="walletCardImage" alt="" />
                <div className='coinBalanceCardContainer'>
                    <CoinBalanceCard /> 
                </div>
            </div>
        </>
    )
}