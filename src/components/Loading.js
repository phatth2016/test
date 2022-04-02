import React from 'react'
import styled from 'styled-components'

export default function Loading({text}) {
  return (
    <Styled>
      <div className="loader">
        <span></span>
        <span></span>
        <span></span>
        <h3>{text} .....</h3>
      </div>
    </Styled>
  )
}

const Styled = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  background-color: #54535380;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 4;
  .loader {
    position: relative;
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;

    span {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      border: 2px solid #fff;
      pointer-events: none;
      animation: animate 5s linear infinite;
    }
    span:nth-child(1) {
      border-radius: 38% 62% 64% 36% / 43% 35% 65% 57%;
    }
    span:nth-child(2) {
      animation-direction: reverse;
      border-radius: 41% 59% 40% 60% / 65% 66% 34% 35%;
    }
    span:nth-child(3) {
      animation-duration: 3s;
      border-radius: 73% 27% 56% 44% / 57% 74% 26% 43%;
    }
    @keyframes animate {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
    h3 {
      color: #fff;
      font-weight: 700;
      font-family: consolas;
    }
  }
`
