import SignUpForm from "./components/Auth/SignUpForm";
import styled from "styled-components"
import GlobalStyle from "./components/GlobalStyle";


const App = ()  =>{


  return (
    <Body>
    <GlobalStyle />
      <SignUpForm />
    </Body>
  );
}

const Body = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  
`



export default App;
