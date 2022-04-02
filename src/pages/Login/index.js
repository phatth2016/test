import React from 'react'
import Button from '../../components/Button'
import Input from '../../components/Input'
import { LoginStyled } from './styled'

export default function Login({setScreen}) {
  return (
    <LoginStyled>
      <img src={process.env.PUBLIC_URL + "/images/logo.png" }/>
      <div className='app-name'>Ronin Wallet</div>
      <div className='title'>Your Digital Passport</div>
      <Input 
        icon="/images/icon/eye.png"
        label="enter password"
        type="password"
      />
      <Button className="btn-unlock" onClick={() => setScreen(2)}>Unlock</Button>
    </LoginStyled>
  )
}
