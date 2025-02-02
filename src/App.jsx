import "./app.scss"
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Parallax from "./components/parallax/Parallax";
import Services from "./components/services/Services";
import Portfolio from "./components/porfolio/Portfolio";
import Contact from "./components/contact/Contact";

const App = () => {
  return <div>
    <section id="Homepage" style={{display: "flex", flexDirection: "column"}}>
      <Navbar></Navbar>
      <Hero></Hero>
    </section>

    <section id="Work">
      <Parallax type="services"></Parallax>
    </section>

    <section>
      <Services></Services>
    </section>

    <section id="Portfolio">
      <Parallax type="portfolo"></Parallax>
    </section>
    <Portfolio></Portfolio>

    <section id="Contact">
      <Contact></Contact>
    </section>
  </div>;
};

export default App;
