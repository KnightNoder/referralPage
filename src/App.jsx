import React from 'react';
import HeaderAndMenu from './HeaderAndMenu'
import Container from '@mui/material/Container';
import ReferAndEarn from './ReferAndEarn';
import ReferAFriend from './ReferAFriend';
import WalletCards from './WalletCards';
import HowItWorksCards from './HowItWorksCards';
import RedeemPopup from './RedeemPopup';
import Modal from 'react-modal';
//LandingPage
import HeaderLinks from './landingPage/HeaderLinks';
import './css/App.css'

export default function App() {
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <>
      <HeaderAndMenu />
      {/* <Container fixed className='mainContainer'>
        <ReferAndEarn />
        <ReferAFriend />
        <WalletCards />
        <HowItWorksCards />
      </Container> */}
      <div className='mainContainer'>
        <ReferAndEarn />
        <ReferAFriend />
        <WalletCards />
        <HowItWorksCards />
      </div>
      {/* <div>
        <button onClick={openModal}>Open Modal</button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
          <button onClick={closeModal}>close</button>
          <div>I am a modal</div>
        </Modal>
      </div> */}
      {/* <Container className='mainContainer'>
        <HeaderLinks />
      </Container> */}
    </>
  );
}

