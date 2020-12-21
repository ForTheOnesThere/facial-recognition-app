import './App.css';
import Navigation from './components/Navigation/Navigation.js';
import Logo from './components/Logo/Logo.js';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm.js';
import FaceRecognition from './components/FaceRecognition/FaceRecognition.js';
import Rank from './components/Rank/Rank.js';
import Particles from 'react-particles-js';
import { Component } from 'react';
import Clarifai from 'clarifai';

const app = new Clarifai.App({
  apiKey: 'c007e471b8af4559b776fc9aee35317b'
 });

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
    app.models.initModel({id: Clarifai.FACE_DETECT_MODEL})
      .then(generalModel => {
        return generalModel.predict("https://www.byrdie.com/thmb/pr2U7ghfvv3Sz8zJCHWFLT2K55E=/735x0/cdn.cliqueinc.com__cache__posts__274058__face-masks-for-pores-274058-1543791152268-main.700x0c-270964ab60624c5ca853057c0c151091-d3174bb99f944fc492f874393002bab7.jpg");
      })
      .then(response => {
        var concepts = response['outputs'][0]['data']['regions'][0];
        console.log(concepts);
      })
  }

  render() {
    return (
      <div className="App">
      <Particles params={particleParams} className='particles'/>
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm onInputChange={this.onInputChange} onButtonPress={this.onButtonPress}/>
      <FaceRecognition />
      </div>
    );
  }
  
}

export default App;