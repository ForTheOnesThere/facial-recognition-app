import './App.css';
import Navigation from './components/Navigation/Navigation.js';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm.js';
import FaceRecognition from './components/FaceRecognition/FaceRecognition.js';
import Rank from './components/Rank/Rank.js';
import SignIn from './components/SignIn/SignIn.js';
import Register from './components/Register/Register.js';
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

const initialState = {
  input: '',
  imageURL: '',
  box: {},
  route: 'signin',
  isSignedIn: false,
  user: {
    id: '',
    name: '',
    email: '',
    entries: '',
    joined: ''
  }
}

class App extends Component {

  constructor() {
    super();
    this.state = initialState
  }

  componentDidMount(){
    fetch('https://intense-mountain-61371.herokuapp.com')
    .then(response => response.json())
    .then(console.log);
  }

  loadUser = (data) => {
    this.setState({
      user: {
        id: data.id,
        name: data.name,
        email: data.email,
        entries: data.entries,
        joined: data.joined
      }
    })
  }

  onInputChange = (event) => {  
    this.setState({input: event.target.value});
  }

  onButtonPress = () => {
    console.log('click');
    this.setState({imageURL: this.state.input});
    //send the url off to the backend and recieve the data to draw the bounding box
      fetch('https://intense-mountain-61371.herokuapp.com/imageurl',{
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              url: this.state.input
            })
          })
      .then(res => res.json())
      //now increment the entry count and draw the detected box using the response from the backend
      .then(response => {
        if (response) {
          fetch('https://intense-mountain-61371.herokuapp.com/image',{
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              id: this.state.user.id
            })
          })
          .then(res => res.json())
          .then(count => {
            this.setState(Object.assign(this.state.user, {entries: count}))
          })
        }
        this.drawBox(this.locateFace(response))
      })
      .catch(err => console.log(`there was an error: ${err}`))  
  }

  locateFace = (data) => {
    const boundingInfo = data.outputs[0].data.regions[0].region_info.bounding_box;
    const userImage = document.getElementById('user-image');
    const width = Number(userImage.width);
    const height = Number(userImage.height);

    return {
      left: boundingInfo.left_col * width,
      top: boundingInfo.top_row * height,
      right: width - (boundingInfo.right_col * width),
      bottom: height - (boundingInfo.bottom_row * height),
    }
  }

  drawBox = (box) => {
    this.setState({box: box});
  }

  changeRoute = (route) => {
    if (route === 'signin'){
      this.setState(initialState)
      console.log('signed out')
    } else if (route === 'home'){
      this.setState({isSignedIn: true})
      console.log('signed in')
    }
    this.setState({route: route});
  }

  render() {
    return (
      <div className="App">
        <Particles params={particleParams} className='particles'/>
          { this.state.route === 'home' 
            ? <div>
                <Navigation changeRoute={this.changeRoute}/>
                <Rank userDetails={this.state.user}/>
                <ImageLinkForm onInputChange={this.onInputChange} onButtonPress={this.onButtonPress}/>
                <FaceRecognition box={this.state.box} image={this.state.imageURL}/>
              </div>
            : (
              this.state.route === 'register'
              ? <Register loadUser={this.loadUser} changeRoute={this.changeRoute}/>
              : <SignIn loadUser={this.loadUser} changeRoute={this.changeRoute}/>
            )
          }
      </div>  
    );
  } 
}

export default App;