import './css/coinHistoryCard.css'
import CoinsOnYourWayCard from './CoinsOnYourWayCard'
import EarningsCard from './EarningsCard';
import SpendingsCard from './SpendingsCard';
import VouchersCard from './VouchersCard';
// import Modal from 'react-modal';
import React, {Component, useEffect} from 'react'
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import RedeemPopup from './RedeemPopup';
import CoinHistoryPopUp from './CoinHistoryPopUp'
import { useState } from 'react';
export default function CoinHistoryCard({user_data}) {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [rewards_list,Set_rewards_list] = useState([]);
    const [buttonsState,setButtonState] = useState({
        earningsButtonColor: "white",
        earningsButtonTextColor:"#FE8276",
        earnings: true,
        spendsButtonColor:"#ebebeb",
        spendsButtonTextColor:"black",
        spends: false,
        vouchersButtonColor: "#ebebeb",
        vouchersButtonTextColor:"black",
        vouchers: false

    })

    const showEarnings = () =>{
        setButtonState({
            earningsButtonColor: "white",
            earningsButtonTextColor:"#FE8276",
            earnings: true,
            spendsButtonColor:"#ebebeb",
            spendsButtonTextColor:"black",
            spends: false,
            vouchersButtonColor: "#ebebeb",
            vouchersButtonTextColor:"black",
            vouchers: false
        })
    }
    const showSpending = () => {
        setButtonState({
            earningsButtonColor: "#ebebeb",
            earningsButtonTextColor:"black",
            earnings: false,
            spendsButtonColor:"white",
            spendsButtonTextColor:"#FE8276",
            spends: true,
            vouchersButtonColor: "#ebebeb",
            vouchersButtonTextColor:"black",
            vouchers: false
        })
    }

    const showVouchers = () => {
        setButtonState({
            earningsButtonColor: "#ebebeb",
            earningsButtonTextColor:"black",
            earnings: false,
            spendsButtonColor:"#ebebeb",
            spendsButtonTextColor:"black",
            spends: false,
            vouchersButtonColor: "white",
            vouchersButtonTextColor:"#FE8276",
            vouchers: true
        })
    }
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    }
    const openDesktopModal = () => {
        setIsOpen(true);
    }
    const closeDesktopModal = () => {
        setIsOpen(false);
    }

    // useEffect(()=>{
    //     Set_rewards_list(rewards_array);
    // })

    return (
        <>
            <div className="coinsHistoryCard">
                <div className='coinHistoryText'>
                    Coin History
                </div>
                <div className='coinsOrderCard'>
                    <div className='toggleButtons'>
                        <button className='rewards' style={{backgroundColor: buttonsState.earningsButtonColor, color: buttonsState.earningsButtonTextColor }} onClick={showEarnings}> 
                            Earnings
                        </button>
                        <button className='rewards' style={{backgroundColor: buttonsState.spendsButtonColor, color: buttonsState.spendsButtonTextColor}} onClick={showSpending}>
                            Spends
                        </button>
                        <button className='rewards' style={{backgroundColor: buttonsState.vouchersButtonColor, color: buttonsState.vouchersButtonTextColor}} onClick={showVouchers}>
                            My Vouchers
                        </button>
                    </div>
                    { buttonsState.earnings && <CoinsOnYourWayCard coins_on_way={user_data.coins_on_way} /> }
                    {buttonsState.earnings && user_data.rewards_list.map((item,key)=> (
                        <EarningsCard key={key} item={item} />
                        ))}
                    {buttonsState.spends && user_data.rewards_list.map((item,key)=> (
                        <SpendingsCard key={key} item={item} />
                    ))}
                    {buttonsState.vouchers && user_data.rewards_list.map((item,key)=> (
                        <VouchersCard key={key} item={item} code="USERNAME1938" />
                    ))}
                    {/* <div className='view-all-link'>
                        <center>
                            <a onClick={openDesktopModal} className='linkToHistory'>View all</a>
                        </center>
                    </div> */}
                </div>
            </div>
            <Modal
                // isOpen={modalIsOpen}
                open={modalIsOpen}
                onClose={closeDesktopModal}
                // onRequestClose={closeDesktopModal}
                // style={customStyles}
                // className="desktopModal"
                // overlayClassName="overlay"
                // className='desktopPopup'
                center
                // ariaHideApp={false}
                // contentLabel="Desktop Modal"
            >
                {/* <RedeemPopup/> */}
                <CoinHistoryPopUp item={user_data}/>
            </Modal>
        </>
    )
}