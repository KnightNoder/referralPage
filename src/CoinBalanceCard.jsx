import './css/coinBalanceCard.css'
import giftPic from "./images/gift.png"
import pic from "./images/coin symbol.jpg"
import discountIcon from './images/discount.png'
import React, { useState } from 'react'
import { BottomSheet } from 'react-spring-bottom-sheet';
import 'react-spring-bottom-sheet/dist/style.css';
import Modal from 'react-modal';
import RedeemPopup from './RedeemPopup';
import { maxWidth } from '@mui/system';
// import Button from '@mui/material/Button';

export default function CoinBalanceCard() {
    const [open, setOpen] = useState(false)
    const [modalIsOpen, setIsOpen] = useState(false);
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)'
        },
    }
    function openModal() {
        setIsOpen(true);
    }
    function onDismiss() {
        setOpen(false)
    }
    function closeModal() {
        setIsOpen(false);
    }
    return (
        <>
            <div className="coinBalanceCard">
                <img src={pic} className="coinPic" alt="" />
                <div >
                    <div className='headerCard'>
                        Coin Balance
                    </div>
                    <div className='coinBalance'>
                        1000
                    </div>

                </div>
            </div>
            <span className='earnings'>Lifetime earnings:</span><span className="amount">&#8377;1000.00</span>
            <div style={{ margin: "1.875rem 2.4375rem 0 2.5rem" }}>
                <button id='redeemBtn' onClick={window.outerWidth > 480 ? openModal : (() => setOpen(true))} className='redeem' type="button">
                    {/* () => setOpen(true) */}
                    Redeem Now
                </button>
                <BottomSheet open={open} onDismiss={onDismiss}>
                    <RedeemPopup />
                </BottomSheet>
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    contentLabel="Example Modal"
                    style={customStyles}
                    // className='desktopPopup'
                    ariaHideApp={false}
                >
                    <RedeemPopup />
                </Modal>
            </div>
            {/* <div id="myModal" class="modal">
                    <div class="modal-content">
                        <span class="close">&times;</span>
                        <p>Some text in the Modal..</p>
                    </div>
                </div> */}
            <div className="dash">
            </div>
            <div className="coinsOnWayFlex">
                <img src={giftPic} className="giftPic" alt=""  />
                <div className='coinsOnWay'>
                    <span className="onWayCoinsNumber">200</span> coins are on the way
                </div>
            </div>
            <div className="savedMoneyCard">
                <img src={discountIcon} className='discountPic' alt="" />
                <div className='savedMoney'>
                    You have saved &nbsp; <span className="onWayCoinsPriceNumber green"> &#8377;1000.00 </span> &nbsp; so far
                </div>
            </div>
        </>
    )
}