import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Particles from 'react-particles-js';
import Navbar from './components/Navbar';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Services from './components/Services';
import Experience from './components/Experience';

function App() {
  return (
    <>
      <Particles 
      params={{particles: {
        number: {
          value: 30,
          density: {
            enable: true,
            value_area: 900
          }
        },
        shape: {
          type: 'square',
          stroke: {
            width: 6,
            color: '#fff'
          }
        }
      }}}
      />
      <Navbar />
      <Header />
      <AboutMe />
      <Services />
      <Experience />
    </>
  );
}

export default App;
