// import pic from "./images/HowItWorks.png"
import pic from "./images/refer.png"
import pic2 from './images/left_coins.jpg'
import './css/howItWorksImageCard.css';
import { useEffect, useState } from "react";

export default function HowItWorksImageCard() {
    const [isMobile,setIsMobile] = useState(false)
    useEffect(()=>{
        window.innerHeight > 480 ? setIsMobile(true) : setIsMobile(false)
    })
    console.log(isMobile,'is mobile?')
    return (
        <> {
            // {isMobile} ? 
            // <img src={pic2} className="howItWorksImageContainer" alt="" /> :
            // window.innerHeight > 480 ?
            // <img src={pic} className="howItWorksImageContainer" alt="" /> 
            <img src={pic2} className="howItWorksImageContainer" alt="" />
        }
        </>
    )
}