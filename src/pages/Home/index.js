import React from 'react'
import { HomeStyled } from './styled'

export default function Home({setScreen}) {
  return (
    <HomeStyled>
      <div className='wallet-info'>
        <div className='group-header'>
          <li className='app-name'>Ronin Wallet</li>
          <img src={process.env.PUBLIC_URL + "/images/icon/user.png"} alt="#icon"/>
        </div>

        <div className='wallet-info'>
          <div className='address'> 
            <div>My wallet<span>(7300 3777 3888 3334)</span></div>
            <img src={process.env.PUBLIC_URL + "/images/icon/copy.png" }alt="#icon"/>
          </div>

          <div className='balance'>
            <div className='group'>
              <div className='balance-usd'>1,000 USD</div>
              <div className='balance-vnd'>23,046,000 VND </div>
            </div>
            <img src={process.env.PUBLIC_URL + "/images/icon/ronin-white.png"} alt="#icon" />
          </div>
        </div>

        <div className='group-action'>
          <div className='action'>
            <img src={process.env.PUBLIC_URL + "/images/icon/deposit.png"} alt="#Deposit" />
            <span>Deposit</span>
          </div>
          <div className='action' onClick={() => setScreen(3)}>
            <img src={process.env.PUBLIC_URL + "/images/icon/send.png"} alt="#send" />
            <span>Send</span>
          </div>
          <div className='action'>
            <img src={process.env.PUBLIC_URL +"/images/icon/swap.png"} alt="#swap" />
            <span>Swap</span>
          </div>
        </div>
      </div>

      <div className='assets'>
        <div className='label'>Assets</div>
        <div className='group-assets'>
          <div className='asset'>
            <img src={process.env.PUBLIC_URL + "/images/icon/eur.png" }alt="#token" />
            <div className='balance-of-token'>
              <div className='count'>50 EUR</div>
              <div className='vnd'>1,531,972 VND</div>
            </div>
          </div>
          <div className='asset'>
            <img src={process.env.PUBLIC_URL + "/images/icon/yen.png"} alt="#token" />
            <div className='balance-of-token'>
              <div className='count'>50 YEN</div>
              <div className='vnd'>1,531,972 VND</div>
            </div>
          </div>
        </div>
      </div>
     
    </HomeStyled>
  )
}
