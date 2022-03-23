import HeaderAndMenu from './HeaderAndMenu'
import Container from '@mui/material/Container';
import ReferAndEarn from './ReferAndEarn';
import ReferAFriend from './ReferAFriend';
import WalletCards from './WalletCards';
import HowItWorksCards from './HowItWorksCards';
import './css/App.css'

export default function App() {
  return (
    <>
      <HeaderAndMenu />
      <Container fixed className='mainContainer'>
        <ReferAndEarn />
        <ReferAFriend />
        <WalletCards />
        <HowItWorksCards />
      </Container>
      {/* <div className='mainContainer'>
        <ReferAndEarn />
        <ReferAFriend />
        <WalletCards />
        <HowItWorksCards />
      </div> */}
      {/* <Container className='mainContainer'>
        <HeaderLinks />
      </Container> */}
    </>
  );
}

