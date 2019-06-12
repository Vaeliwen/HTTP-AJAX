import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      friends: ['test']
    } 
  }


  componentDidMount() {
    axios
    .get(`http://localhost:5000/friends`)
        .then(response => this.setState({friends: response}))
        .catch(err => console.log(err))
  };

  render() {
    return <div>Hello world</div>
  }

}

export default App;
