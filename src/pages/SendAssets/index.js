import React, {useState} from 'react'
import Button from '../../components/Button'
import Input from '../../components/Input'
import Loading from '../../components/Loading'
import PopupAssets from './PopupAsset'
import PopupSend from './PopupSend'
import { SendStyled } from './styled'

export default function index({setScreen}) {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isShowPopupAsset, setShowPopupAsset] = useState(false)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isShowPopupSuccess, setShowPopupSuccess] = useState(false)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [data, setData] = useState({})
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isLoading, setLoading] = useState(false)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isValidated, setValidated] = useState(true)

    const handlePopup = () => {
      setShowPopupAsset(!isShowPopupAsset)
    }

    const handlePopupSuccess = () => {
      setShowPopupSuccess(!isShowPopupSuccess)
    }

    const onChangeData = (key, value) => {
      setData({...data, [key]: value})
    }

    const handleSendToken = () => {
      if (!data.asset||!data.amount||!data.to || !data.asset) {
        return setValidated(false)
      }
      setLoading(true)
      setTimeout(() => {
        setValidated(true)
        setLoading(false)
        setShowPopupSuccess(!isShowPopupSuccess)
      }, 2000)
    }

  return (
    <SendStyled>
      <div className='header'>
        <img className='btn-close' src={process.env.PUBLIC_URL + "/images/icon/back.png"} alt="#back" onClick={() => setScreen(2)}/>
          Send Assets
      </div>
      <div className='form'>
        <Input 
          label="from"
          placeholder="My Wallet (7300...3334)"
          disabled
        />
        <Input 
          label="to"
          onChange={(e) => onChangeData("to", e.target.value)}
        />
        <label>Assets</label>
        <div className='assets' onClick={handlePopup}>
         {data.asset && (<><img src={process.env.PUBLIC_URL + data.asset?.icon} alt="#" /> {data.asset?.token} </>)}
        </div>

        <Input 
          label="Amount"
          icon="/images/icon/max.png"
          note="available: 50 EUR"
          type="number"
          onChange={(e) => onChangeData("amount", e.target.value)}
        />
      </div>
      {isShowPopupAsset && <PopupAssets handlePopup={handlePopup} onChangeData={onChangeData}/>}
      {isShowPopupSuccess && <PopupSend data={data} handlePopupSuccess={handlePopupSuccess}/> }
      {!isValidated&&<div className='error'>Sorry, but your form was not submited! Please correct all field: From, To, Assets, Amount and submit the form again.</div>}
      <div className='footer'>
        <Button className="btn-cancel" onClick={() => setScreen(2)}>Cancel</Button>
        <Button onClick={handleSendToken}>Send</Button>
      </div>
      {isLoading && <Loading text="sending"/>}
    </SendStyled>
  )
}
