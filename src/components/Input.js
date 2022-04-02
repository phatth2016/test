import React from 'react'
import styled from 'styled-components'

// eslint-disable-next-line import/no-anonymous-default-export
export default function Input (props) {
  return (
    <Styled>
      <span className='label'>
        {props.label && <Label>{props.label}</Label>}
        {props.note && <Label>{props.note}</Label>}
      </span>
      <InputStyled {...props} />
      {props.icon && <img src={process.env.PUBLIC_URL + props.icon} onClick={() => props.onMax('amount', props.amount)} alt="#"/>}
    </Styled>
  )
}


const Styled =styled.div`
  position: relative;
  img {
    position: absolute;
    right: 16px;
    bottom: 8px;
    cursor: pointer;
  }
  .label {
    display: flex;
    justify-content: space-between;
  }
`;

const Label = styled.label`
  font-family: 'SF Pro Display';
  font-weight: 700;
  font-size: 10px;
  line-height: 16px;
  text-transform: uppercase;
  color: #57627B;
  margin-bottom: 4px;
  margin-left: 4px;
`;

const InputStyled = styled.input`
  height: 40px;
  width: 100%;
  background: ${props => props.disabled ? "#C5CEE0" : "#FFFFFF"};
  border: 1px solid #C5CEE0;
  box-sizing: border-box;
  border-radius: 8px;
  :focus {
    outline: none;
  }
  font-family: 'SF Pro Display';
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  padding: 10px 16px;
`;