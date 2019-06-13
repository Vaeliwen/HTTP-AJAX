import React from 'react';
import './App.css';
import axios from 'axios';
import ReactDOM from 'react-dom';



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      friends: [],
      name: null,
      age: null,
      email: null,
      id: null
    } 
  }




  componentDidMount() {
    axios
    .get(`http://localhost:5000/friends`)
        .then(response => {
          this.setState({friends: response.data})
        })
        .catch(err => {
          console.error('Server error', err)
        });
  };

  changeHandler(event) {
    this.setState({[event.target.name]: event.target.value})
  }

 
  submitHandler(event) {
    event.preventDefault()
    
    const newFriend = {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    }

    axios
      .post(`http://localhost:5000/friends`, newFriend)
      .then(response => {
        this.setState({
          friends: response.data
        })
      })
  }

 updateHandler(event) {
    event.preventDefault()

 } 

  render() {
    return (
      <div>
        <div className='friends-list'>
          {this.state.friends.map(friend => (
            <FriendDetails key={friend.id} friend={friend} />
         ))}
        </div>
        <form onSubmit={this.submitHandler.bind(this)}>
          <h2>Add Your Friends!</h2>
          <label>
            <input type='text' placeholder={`Friend's Name`} name='name' value={this.state.name} onChange={this.changeHandler.bind(this)} /> <br />
            <input type='text' placeholder={`Friend's Age`} name='age' value={this.state.age} onChange={this.changeHandler.bind(this)} /> <br />
            <input type='text' placeholder={`Friend's E-Mail`} name='email' value={this.state.email} onChange={this.changeHandler.bind(this)} /> <br />
          </label>
          <input type='submit' value='submit' />
        </form>
        <form onSubmit={this.updateHandler.bind(this)}>
          <input type='text' placeholder='ID to update' name='id' value={this.state.id} onChange={this.changeHandler.bind(this)} />
          <input type='submit' value='submit' />
        </form>
      </div>

    )
  }
}

function FriendDetails({ friend }) {
  const { name, age, email, id } = friend;
  return (
    <div className='friend-card'>
      <h2>{name}</h2>
      <div>Age: {age}</div>
      <div>E-mail: {email}</div>
      <div>ID: {id}</div>
    </div>
  )
} 


export default App;
