import styled from 'styled-components';
import React, {useState} from 'react'
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login'
import SendAssets from './pages/SendAssets'

function App() {
  // eslint-disable-next-line no-undef
  const [screen, setScreen] = useState(1)
  console.log('screen: ', screen)
  return (
    <ScreenStyled>
      {screen === 1 && <Login setScreen={setScreen}/> }
      {screen === 2 && <Home setScreen={setScreen} /> }
      {screen === 3 && <SendAssets setScreen={setScreen}/>}
    </ScreenStyled>
  );
}

export default App;


const ScreenStyled = styled.div`
  width: 335px;
  height: 600px;
  margin: auto;
  background: #FFFFFF;
  padding: 20px;
  position: relative;
`;