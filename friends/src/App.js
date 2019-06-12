import React from 'react';
import './App.css';
import axios from 'axios';



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
        .then(response => {
          this.setState({friends: response.data})
        })
        .catch(err => {
          console.error('Server error', err)
        });
  };

  render() {
    return (
      <div>
        <div className='friends-list'>
          {this.state.friends.map(friend => (
            <FriendDetails key={friend.id} friend={friend} />
         ))}
        </div>
        <form>
          <h2>Add Your Friends!</h2>
          <label>
            <input type='text' placeholder={`Friend's Name`} /> <br />
            <input type='text' placeholder={`Friend's Age`} /> <br />
            <input type='text' placeholder={`Friend's E-Mail`} /> <br />
          </label>
          <input type='submit' />
        </form>
      </div>

    )
  }
}

function FriendDetails({ friend }) {
  const { name, age, email } = friend;
  return (
    <div className='friend-card'>
      <h2>{name}</h2>
      <div>Age: {age}</div>
      <div>E-mail: {email}</div>
    </div>
  )
} 


export default App;
