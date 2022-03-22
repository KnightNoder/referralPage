import HowItWorksImageCard from './HowItWorksImageCard';
import CoinHistoryCard from './CoinHistoryCard';
import './css/howItWorksCards.css'
export default function HowItWorksCards() {
    return (
        <>
            <div className='howItWorksSectionCard'>
                <HowItWorksImageCard />
                {/* <HowItWorksImageCard /> */}
                <CoinHistoryCard />
                {/* <CoinHistoryCard /> */}
            </div>
        </>
    )
}
