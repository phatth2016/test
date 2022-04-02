import React from 'react'
import Popup from '../../../components/Popup'
import { PopupStyled } from './styled'
import { ASSETS } from '../../../constants/data'

export default function index({handlePopup, onChangeData, setScreen}) {

  const handleSelectAsset = (item) => {
    onChangeData('asset',item)
    handlePopup()
  }

  return (
    <Popup>
      <PopupStyled>
        <div className='header'>
          Assets
        </div>
        <img className='btn-close' src={process.env.PUBLIC_URL + "/images/icon/close.png"} alt="#" onClick={handlePopup}/>

        <div className='group-assets'>
        {
          ASSETS.map(item => {
            return (
              <div className='asset' onClick={() => handleSelectAsset(item)}>
                <img src={ process.env.PUBLIC_URL + item.icon} alt="#token" />
                <div className='balance-of-token'>
                  <div className='count'>{item.amount} {item.token}</div>
                  <div className='vnd'>{item.vnd} VND</div>
                </div>
              </div>
            )
          })
        }
        </div>
      </PopupStyled>   
    </Popup> 
  )
}
