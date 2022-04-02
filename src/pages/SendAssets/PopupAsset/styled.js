import styled from 'styled-components'

export const PopupStyled = styled.div`
  height: 550px;
  .header {
    border-bottom: 1px solid #C5CEE0;
  }
  .group-assets{
    margin-top: 56px;
    .asset {
      left: 20px;
      top: 373px;
      border-radius: 8px;
      margin-bottom: 8px;
      display: flex;
      align-items: center;
      padding: 16px 20px;
      cursor: pointer;
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
      :hover {
        background: #F7F9FC;
      }
    }
  }

`



