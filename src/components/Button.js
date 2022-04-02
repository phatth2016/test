import React from 'react'
import styled from 'styled-components'

export default function Button(props) {
  return (
    <ButtonStyled {...props}>{props.children}</ButtonStyled>
  )
}

const ButtonStyled = styled.div`
  width: 100%;
  height: 40px;
  background: linear-gradient(256.28deg, #1C94F4 0%, #1273EA 100%);
  border-radius: 8px;
  font-family: 'SF Pro Text';
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: #fff;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;