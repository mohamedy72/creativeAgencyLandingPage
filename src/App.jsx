import { Container } from "./components/Container.styled";
import {
  Header,
  Hero,
  Aboutus,
  Services,
  Portfolio,
  Testimonials,
  Contactus,
  Footer,
} from "./pages";
import GlobalStyles from "./shared/GlobalStyles.styled";

function App() {
  return (
    <>
      <GlobalStyles />
      <Container>
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
      <Footer />
    </>
  );
}

export default App;
