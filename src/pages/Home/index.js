import React from 'react'
import { HomeStyled } from './styled'

export default function Home() {
  return (
    <HomeStyled>
      <div className='wallet-info'>
        <div className='group-header'>
          <li className='app-name'>Ronin Wallet</li>
          <img src="/images/icon/user.png" alt="#icon"/>
        </div>

        <div className='wallet-info'>
          <div className='address'> 
            <div>My wallet<span>(7300 3777 3888 3334)</span></div>
            <img src="/images/icon/copy.png" alt="#icon"/>
          </div>

          <div className='balance'>
            <div className='group'>
              <div className='balance-usd'>1,000 USD</div>
              <div className='balance-vnd'>23,046,000 VND </div>
            </div>
            <img src="/images/icon/ronin-white.png" alt="#icon" />
          </div>
        </div>

        <div className='group-action'>
          <div className='action'>
            <img src="/images/icon/deposit.png" alt="#Deposit" />
            <span>Deposit</span>
          </div>
          <div className='action'>
            <img src="/images/icon/send.png" alt="#send" />
            <span>Deposit</span>
          </div>
          <div className='action'>
            <img src="/images/icon/swap.png" alt="#swap" />
            <span>Swap</span>
          </div>
        </div>
      </div>

      <div className='assets'>
        <div className='label'>Assets</div>
        <div className='group-assets'>
          <div className='asset'>
            <img src="/images/icon/eur.png" alt="#token" />
            <div className='balance-of-token'>
              <div className='count'>50 EUR</div>
              <div className='vnd'>1,531,972 VND</div>
            </div>
          </div>
          <div className='asset'>
            <img src="/images/icon/yen.png" alt="#token" />
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
