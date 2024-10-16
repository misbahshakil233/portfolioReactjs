import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import SocialLinks from './components/SocialLinks';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Expeirence from './components/Expeirence';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
  
      <NavBar />
      <Home />
      
      <SocialLinks />
      <About />
      <Portfolio />
      <Expeirence />
     <Skills />
     <Contact />
     <Footer />
    </div>
  );
}

export default App;
