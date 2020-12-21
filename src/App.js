import './App.css';
import Navigation from './components/Navigation/Navigation.js';
import Logo from './components/Logo/Logo.js';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm.js';
import Rank from './components/Rank/Rank.js';
import Particles from 'react-particles-js';

const particleParams = {
  particles: {
    number: {
      value: 40,
      density: {
        enable: true,
        value_area: 800
      },
    },

    line_linked: {
      shadow: {
        enable: true,
        color: "#ffffff",
        blur: 10
      },
      width : 1
    }
  }
}

function App() {
  return (
    <div className="App">
      <Particles params={particleParams} className='particles'/>
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
      {/*<FaceRecognition />*/}
    </div>
  );
}

export default App;
