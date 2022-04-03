import React from 'react'
import { HomeStyled } from './styled'
import { DATA } from '../../constants/data'

export default function Home({setScreen}) {
  return (
    <HomeStyled>
      <div className='wallet-info'>
        <div className='group-header'>
          <li className='app-name'>Ronin Wallet</li>
          <img src={process.env.PUBLIC_URL + "/images/icon/user.svg"} alt="#icon"/>
        </div>

        <div className='wallet-info'>
          <div className='address'> 
            <div>My wallet<span>(7300 3777 3888 3334)</span></div>
            <img src={process.env.PUBLIC_URL + "/images/icon/copy.svg" }alt="#icon"/>
          </div>

          <div className='balance'>
            <div className='group'>
              <div className='balance-usd'>{DATA.balanceUsd}USD</div>
              <div className='balance-vnd'>{DATA.balanceVnd} VND </div>
            </div>
            <img src={process.env.PUBLIC_URL + "/images/icon/ronin-white.svg"} alt="#icon" />
          </div>
        </div>

        <div className='group-action'>
          <div className='action disable'>
            <img src={process.env.PUBLIC_URL + "/images/icon/deposit.svg"} alt="#Deposit" />
            <span>Deposit</span>
          </div>
          <div className='action' onClick={() => setScreen(3)}>
            <img src={process.env.PUBLIC_URL + "/images/icon/send.svg"} alt="#send" />
            <span>Send</span>
          </div>
          <div className='action disable'>
            <img src={process.env.PUBLIC_URL +"/images/icon/swap.svg"} alt="#swap" />
            <span>Swap</span>
          </div>
        </div>
      </div>

      <div className='assets'>
        <div className='label'>Assets</div>
        <div className='group-assets'>
        {
          DATA.assets.map((item, index) => {
            return (
              <div key={index} className='asset'>
                <img src={process.env.PUBLIC_URL + item.icon }alt="#token" />
                <div className='balance-of-token'>
                  <div className='count'>{item.amount} {item.token}</div>
                  <div className='vnd'>{item.vnd}</div>
                </div>
              </div>
            )
          })
        }
        </div>
      </div>
     
    </HomeStyled>
  )
}
