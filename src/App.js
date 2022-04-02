import styled from 'styled-components';
import './App.css';
import Login from './pages/Login'

function App() {
  return (
    <ScreenStyled>
      <Login />
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