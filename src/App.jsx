import { Container } from "./components/Container.styled";
import Header from "./pages/Header";
import Hero from "./pages/Hero";
import GlobalStyles from "./shared/GlobalStyles.styled";

function App() {
  return (
    <>
      <Container>
        <GlobalStyles />
        <Header />
        <main>
          <Hero />
        </main>
      </Container>
    </>
  );
}

export default App;
