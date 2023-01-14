import "./App.css";
import Button1 from "./components/Button1";
import Button2 from "./components/Button2";
import styled from "styled-components";
import TailwindComponent from "./components/TailwindComponent";

const Container = styled.div`
  display: flex;
`;

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
`;

function App() {
  return (
    <>
      <Button1 />
      <Button2 />
      <Container>
        <Button></Button>
      </Container>
      <TailwindComponent />
    </>
  );
}

export default App;
