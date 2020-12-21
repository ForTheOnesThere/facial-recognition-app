import './App.css';
import Navigation from './components/Navigation/Navigation.js';
import Logo from './components/Logo/Logo.js';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm.js';
import Rank from './components/Rank/Rank.js';
import Particles from 'react-particles-js';
import { Component } from 'react';

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

class App extends Component {

  constructor() {
    super();
    this.state = {
      input: '',
    }
  }

  onInputChange = (event) => {
    console.log(event.target.value);
  }

  onButtonPress = () => {
    console.log('click');
  }

  render() {
    return (
      <div className="App">
      <Particles params={particleParams} className='particles'/>
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm onInputChange={this.onInputChange} onButtonPress={this.onButtonPress}/>
      {/*<FaceRecognition />*/}
      </div>
    );
  }
  
}

export default App;