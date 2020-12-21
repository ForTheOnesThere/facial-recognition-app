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
      imageURL: ''
    }
  }

  onInputChange = (event) => {  
    this.setState({input: event.target.value});
  }

  onButtonPress = () => {
    console.log('click');
    this.setState({imageURL: this.state.input});

    app.models.initModel({id: Clarifai.FACE_DETECT_MODEL})
      .then(generalModel => {
        return generalModel.predict(this.state.input);
      })
      .then(response => {
        var boundingBox = response.outputs[0].data.regions[0].region_info.bounding_box;
        console.log(boundingBox);
      },

        function(err){
          console.log('there was an error!');
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
      <FaceRecognition image={this.state.imageURL}/>
      </div>
    );
  }
  
}

export default App;