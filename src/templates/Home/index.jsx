import { Heading } from '../../components/Heading';
import * as Styled from './styles';

function Home() {
  return (
    <div className="App">
      <Styled.Wrapper fontSize="18px">
        <Heading>Olá mundo!</Heading>
      </Styled.Wrapper>
    </div>
  );
}

export default Home;
