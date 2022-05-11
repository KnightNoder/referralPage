import CoinHistoryOrderCard from './EarningsCard';
import Container from '@mui/material/Container';
import './css/coinHistoryCard.css'
import React, {Component} from 'react'

const CoinHistoryPopUp = ({item}) => {
  return (
    <>
        <div className='popUpContainer'>
            <div className='coinHistoryPopUpHeader'>
                Coin History
            </div>
            <div className='coinsOrderCard'>
               {item.rewards_list.map((item,key)=> (
                 <CoinHistoryOrderCard key={key} item={item} />
                ))}
            </div>
        </div>
    </>
  )
}

export default CoinHistoryPopUp