import React from 'react';
import HeaderAndMenu from './HeaderAndMenu'
import Container from '@mui/material/Container';
import ReferAndEarn from './ReferAndEarn';
import ReferAFriend from './ReferAFriend';
import WalletCards from './WalletCards';
import './css/App.css'

export default function App() {
  return (
    <>
      <HeaderAndMenu />
      <Container fixed className='mainContainer'>
        <ReferAndEarn />
        <ReferAFriend />
        <WalletCards />
      </Container>
    </>
  );
}

