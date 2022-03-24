// import pic from "./images/HowItWorks.png"
import pic from "./images/left_coins.jpg"
import pic2 from './images/howitworks2.png'
import './css/howItWorksImageCard.css';

export default function HowItWorksImageCard() {
    const isMobile = window.innerHeight > 480 ? true : false
    console.log(isMobile,'mobile?')
    return (
        <> {
            // isMobile ? 
            // <img src={pic2} className="howItWorksImageContainer" alt="" /> :
            <img src={pic} className="howItWorksImageContainer" alt="" /> 
        }
        </>
    )
}