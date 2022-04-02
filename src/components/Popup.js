import React from 'react'

import styled from 'styled-components'

export default function Popup({children}) {
  return (
    <Wrapper >
      <Styled>{children}</Styled>
    </Wrapper>
    
  )
}


const Styled = styled.div`
  position: absolute;
  width: 336px;
  /* height: 560px; */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #FFFFFF;
  border-radius: 16px;
  .header {
    border-bottom: 1px solid #C5CEE0;
  }
  .btn-close {
    position: absolute;
    right: 12px;
    top: 12px;
    cursor: pointer;
    z-index: 1;
  }
`;

export const Wrapper = styled.div`
  position: absolute;
  background: #151A3050;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  z-index: 3;
  
`