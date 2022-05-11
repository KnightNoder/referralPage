import React, {Component} from 'react'
import './css/walletCards.css'
import './css/coinBalanceCard.css'
import CoinBalanceCard from './CoinBalanceCard'
import giftPic from "./images/gift.png"
import discountIcon from './images/discount.png'
import pic from "./images/WalletCardImage.jpg"

export default function WalletCards({showHistory,user_data}) {
    return (
        <>
            <div className='walletCardsContainer'>
                <div className='coinBalanceCardContainer'>
                    <div className="coinsOnWayFlex">
                        <img src={giftPic} className="giftPic" alt=""  />
                        <div className='coinsOnWay'>
                            <span className="onWayCoinsNumber">{user_data.coins_on_way}</span>&nbsp;coins are on the way
                            {/* <Chip label="200" classes={onWayCoinsNumber} component="a" href="#basic-chip" /> &nbsp;coins are on the way */}
                        </div>
                    </div>
                    <div className="savedMoneyCard">
                        <img src={discountIcon} className='discountPic' alt="" />
                        <div className='savedMoney'>
                            You earned Amazon vouchers worth &nbsp; <span className="onWayCoinsPriceNumber"> &#8377;{user_data.total_earnings}</span> &nbsp;
                        </div>
                    </div>
                </div>
                <div className='coinBalanceCardContainer container-dash-border'>
                    <CoinBalanceCard  user_data={user_data} showHistory={showHistory}/> 
                </div>
            </div>
        </>
    )
}