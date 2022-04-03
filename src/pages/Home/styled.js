import styled from 'styled-components'

export const HomeStyled = styled.div`
  .wallet-info {
    background-image: url(${process.env.PUBLIC_URL + "/images/bg-home.png"});
    background-repeat: no-repeat;
    background-size: cover;
    padding-bottom: 20px;
    background-position: center;
    .group-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-family: 'SF Pro Display';
      font-weight: 700;
      font-size: 12px;
      line-height: 20px;
      color: #151A30;
      img {
        cursor: pointer;
      }
      .app-name {
        background: #F7F9FC;
        border-radius: 8px;
        padding: 6px 19px;
        ::marker {
          color: #1273EA;
          width: 8px;
          height: 8px;
        }
      }
    }
    .wallet-info {
      background: linear-gradient(256.28deg, #1C94F4 0%, #1273EA 100%);
      box-shadow: 0px 12px 20px -4px #C5CEE0;
      border-radius: 16px;
      padding: 18px 20px;
      margin-top: 20px;
      .address {
        font-family: 'SF Pro Display';
        font-weight: 600;
        font-size: 14px;
        line-height: 20px;
        color: #FFFFFF;
        display: flex;
        justify-content: space-between;
        padding-bottom: 14px;
        border-bottom: 1px solid #68B8F850;
        img {
          cursor: pointer;
        }
        div > span {
          font-weight: 400;
          font-size: 14px;
          line-height: 20px;
          color: #8DC9F9;
          margin-left: 8px;
        }  
      }
      .balance {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        margin-top: 12px;
        .group {
          .balance-usd {
            font-family: 'SF Pro Display';
            font-style: normal;
            font-weight: 700;
            font-size: 32px;
            line-height: 40px;
            color: #FFFFFF;
          }
          .balance-vnd {
            color: #8DC9F9;
            font-weight: 600;
            font-size: 16px;
            line-height: 24px;
            margin-top: 4px;
          }
        }
        img {
          width: 40px;
          height: 40px;
        }
      }
    }

    .group-action {
      display: flex;
      margin-top: 28px;
      justify-content: center;
      cursor: pointer;
      .action {
        display: flex;
        flex-direction: column;
        margin-right: 16px;
        img {
          width: 48px;
          height: 48px;
        }
        span {
          font-family: 'SF Pro Display';
          font-weight: 600;
          font-size: 12px;
          line-height: 20px;
          text-align: center;
          color: #151A30;
          margin-top: 4px;
        }
        :hover {
          img {
            transform: rotate(10deg);
            transition-duration: 500ms
          }
        }
        &.disable {
          opacity: 0.5;
        }
      }
    }
  }
  
  .assets {
    .label {
      font-family: 'SF Pro Display';
      font-weight: 700;
      font-size: 16px;
      line-height: 20px;
      color: #151A30;
      margin-left: 12px;
    }
    .group-assets{
      margin-top: 12px;
      .asset {
        left: 20px;
        top: 373px;
        background: #F7F9FC;
        border-radius: 8px;
        margin-bottom: 8px;
        display: flex;
        align-items: center;
        padding: 16px 20px;
        .balance-of-token {
          margin-left: 16px;
          .count {
            font-family: 'SF Pro Display';
            font-weight: 600;
            font-size: 14px;
            line-height: 20px;
            color: #151A30;
          }
          .vnd {
            font-family: 'SF Pro Display';
            font-weight: 400;
            font-size: 12px;
            line-height: 16px;
            color: #8F9BB3;
          }
        }
      }
    }
  }
  
`