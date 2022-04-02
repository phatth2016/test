import React from 'react'
import styled from 'styled-components'

export default function Screen({children}) {
  return (
    <ScreenStyled>
      {children}
    </ScreenStyled>
  )
}

const ScreenStyled = styled.div`
  width: 375px;
  height: 600px;
  margin: auto;
  background: #FFFFFF;
  padding: 20px;
`;
