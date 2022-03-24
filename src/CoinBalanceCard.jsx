import './css/coinBalanceCard.css'
// import coinPic from './images/onlycoin.png'
import giftPic from "./images/gift.png"
import pic from "./images/coin symbol.jpg"
import historyPic from './images/history.png'
import discountIcon from './images/discount.png'
import React, { useState,useContext,createContext  } from 'react'
import { BottomSheet } from 'react-spring-bottom-sheet';
import 'react-spring-bottom-sheet/dist/style.css';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import Chip from '@mui/material/Chip';
// import Modal from 'react-modal';
import RedeemPopup from './RedeemPopup';
const mobileViewContext = createContext();

export default function CoinBalanceCard({showHistory}) {
    const [open, setOpen] = useState(false)
    const [modalIsOpen, setIsOpen] = useState(false);
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

    const openMobileModal = () =>{
        setOpen(true)
    }

    const closeMobileModal = () => {
        setOpen(false)
    }

    return (
        <>
            <div className='coinBalanceHeading'>
                Coin Balance:
                <div className='history' onClick={() => showHistory()}>
                    <img style={{marginRight:"5px"}} src={historyPic} alt="" /> History
                </div>
            </div>
            <div className="coinBalanceCard">
                <img src={pic} className="coinPic"  alt="" />
                <div className='coinBalanceRightSection'>
                    <div className='headerCard'>
                        Coin Balance
                    </div>
                    <div className='coinBalanceDiv'>
                        {/* <img src={coinPic} alt="" srcset="" /> */}
                        <div className='coinBalance'>
                            1600
                        </div>
                        <div className='rupee'>
                        1 Coin = &#8377;1
                        </div>
                    </div>
                </div>
            </div>
            <span className='earnings'>Lifetime earnings:</span><span className="amount">&#8377;1000.00</span>
            <div style={{ margin: "1.875rem 2.4375rem 0 2.5rem" }}>
                <button id='redeemBtn' onClick={window.innerWidth > 480 ? openDesktopModal : openMobileModal} className='redeem' type="button">
                    {/* () => setOpen(true) */}
                    Redeem Now
                </button>
                <BottomSheet open={open} onDismiss={closeMobileModal}>
                    <RedeemPopup />
                </BottomSheet>
                <Modal
                    // isOpen={modalIsOpen}
                    // onRequestClose={closeDesktopModal}
                    center
                    open={modalIsOpen}
                    onClose={closeDesktopModal}
                    // classNames={{
                    //     overlay: 'customOverlay',
                    //     modal: 'customModal',
                    // }}
                    // style={customStyles}
                    // className="desktopModal"
                    // overlayClassName="overlay"
                    // className='desktopPopup'
                    // ariaHideApp={false}
                    // contentLabel="Desktop Modal"
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
                    <span className="onWayCoinsNumber">200</span>&nbsp;coins are on the way
                    {/* <Chip label="200" classes={onWayCoinsNumber} component="a" href="#basic-chip" /> &nbsp;coins are on the way */}
                </div>
            </div>
            <div className="savedMoneyCard">
                <img src={discountIcon} className='discountPic' alt="" />
                <div className='savedMoney'>
                    You have saved &nbsp; <span className="onWayCoinsPriceNumber"> &#8377;1000.00 </span> &nbsp; so far
                </div>
            </div>
        </>
    )
}