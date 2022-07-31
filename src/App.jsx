import { Container } from "./components/Container.styled";
import {
  Header,
  Hero,
  Aboutus,
  Services,
  Portfolio,
  Testimonials,
  Contactus,
} from "./pages";
import GlobalStyles from "./shared/GlobalStyles.styled";

function App() {
  return (
    <>
      <Container>
        <GlobalStyles />
        <Header />
        <main>
          <Hero />
          <Aboutus />
          <Services />
          <Portfolio />
          <Testimonials />
          <Contactus />
        </main>
      </Container>
    </>
  );
}

export default App;
