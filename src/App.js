import styled from 'styled-components';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login'
import SendAssets from './pages/SendAssets'

function App() {
  return (
    <ScreenStyled>
      {/* <Login /> */}
      {/* <Home /> */}
      <SendAssets />
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
`;