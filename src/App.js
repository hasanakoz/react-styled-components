import Container from "./components/Container";
import { Button, TomatoButton } from "./components/Button";

const App = () => {
  return (
    <>
      <Container bg="gray">
        <Button primary>Save</Button>
        <Button>Clear</Button>
        <TomatoButton>Send</TomatoButton>
        <TomatoButton primary>Submit</TomatoButton>
      </Container>
    </>
  );
};

export default App;
