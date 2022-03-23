import './css/coinHistoryCard.css'
import CoinsOnYourWayCard from './CoinsOnYourWayCard'
import CoinHistoryOrderCard from './CoinHistoryOrderCard';
// import Modal from 'react-modal';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import RedeemPopup from './RedeemPopup';
import { useState } from 'react';
export default function CoinHistoryCard() {
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
                            <a onClick={openDesktopModal} className='linkToHistory'>View all</a>
                        </center>
                    </div>
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
                <RedeemPopup/>
            </Modal>
        </>
    )
}