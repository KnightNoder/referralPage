import './css/walletCards.css'
import WalletImageCard from './WalletImageCard'
import CoinBalanceCard from './CoinBalanceCard'
import pic from "./images/WalletCardImage.jpg"
// import { Helmet } from "react-helmet";

export default function WalletCards() {
    return (
        <>
            <div className='walletCardsContainer'>
                <img src={pic} className="walletCardImage" alt="" />
                {/* <div className='walletRightSection'> */}
                <div className='coinBalanceCardContainer'>
                    <CoinBalanceCard /> 
                </div>
                {/* <CoinBalanceCard /> */}
                {/* </div> */}
                {/* <Helmet>
                    <script src="../scripts/coinBalanceCard.js"
                        type="text/javascript" />
                </Helmet> */}
                {/* <WalletImageCard /> */}
            </div>
        </>
    )
}