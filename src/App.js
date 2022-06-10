import './App.css';
import Cards from './components/Cards/Cards';
import Footer from './components/Footer/Footer';
import HeroSection from './components/HeroSection/HeroSection';
import Navbar from './components/Navbar/Navbar';
import Section from './components/Section/Section';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <HeroSection/>
     <Section/>
     <Cards/>
     <Footer/>
    </div>
  );
}

export default App;
