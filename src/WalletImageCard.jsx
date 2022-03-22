import pic from "./images/WalletCardImage.jpg"
import './css/walletCards.css'
export default function WalletImageCard() {
    return (
        <>
            <img src={pic} className="walletCardImage" alt="" />
        </>
    )
}