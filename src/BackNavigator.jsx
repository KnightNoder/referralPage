import pic from './images/back.png'
import './css/BackNavigator.css'
const BackNavigator = ({hideHistory}) => {
  return (
    <>  
        <div onClick={()=>hideHistory()} className='backNavigatorContainer'>
            <img src={pic} style={{paddingTop:"10px"}} alt=""  /> &nbsp; <span className='backNavigatorText'>Back</span> 
        </div>
    </>
  )
}

export default BackNavigator