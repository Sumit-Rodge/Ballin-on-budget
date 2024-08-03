import bg from '../src/Images/bg.png'
import styled from 'styled-components';
import { MainLayout } from './Styles/Layout';
import Orb from './Components/Orb/Orb';


function App() {
  return (
    
    <AppStyled bg={bg} className="App">
      <Orb></Orb>
      <MainLayout>

      </MainLayout>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  height:100vh;
  background-image:url('${props => props.bg}');
  position:relative;
`;

export default App;
