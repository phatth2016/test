import React from 'react'
import Button from '../../../components/Button'
import Popup from '../../../components/Popup'
import {Styled} from './styled'

export default function index({data, setScreen}) {
  return (
    <Popup>
      <Styled>
        <div className='title'>
          Successfully sent
        </div>
        <div className='desc'>Your <b>{data?.asset.token}</b> has been sent! <br/>
        Thank you for using our service</div>
        <Button onClick={() => setScreen(2)}>Ok</Button>
      </Styled>
    </Popup>
    
  )
}
