import styled from 'styled-components'

export const SendStyled = styled.div`
  .header{
    width: 100%auto;
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    color: #151A30;
    box-shadow: 0px 4px 12px #F7F9FC;
    z-index: 1;
    img {
      position: absolute;
      left: 0px;
      cursor: pointer;
    }
  }

  .form {
    margin-top: 56px;
    div {
      margin-bottom: 16px;
    }
    label {
      font-family: 'Inter';
      font-weight: 700;
      font-size: 10px;
      line-height: 16px;
      letter-spacing: 0.5px;
      text-transform: uppercase;
      color: #57627B;
      margin-bottom: 4px;
    }
    .assets {
      height: 40px;
      background: #FFFFFF;
      border: 1px solid #C5CEE0;
      box-sizing: border-box;
      border-radius: 8px;
      display: flex;
      align-items: center;
      padding: 0 16px;
      cursor: pointer;
      img {
        width: 24px;
        height: 24px;
        margin-right: 8px;
      }
    }
  }
  .footer {
    display: flex;
    position: absolute;
    bottom: 20px;
    left: 20px;
    right: 20px;
    .btn-cancel {
      background: #F7F9FC;
      color:#1273EA;
      margin-right: 12px;
      cursor: pointer;
    }
  }
`;