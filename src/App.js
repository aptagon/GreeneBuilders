import './App.css';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import Experience from './components/Experience';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Blog from './components/Blog';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Experience />
      <Services />
      <Projects />
      <Contact />
      <Blog />
      <Footer />
    </>
  );
}

export default App;
