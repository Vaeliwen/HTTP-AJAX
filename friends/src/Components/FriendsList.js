import React, { Component } from 'react';
import axios from 'axios';

class FriendsList extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: null,
            age: null,
            email: null
        }
    }

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
          .catch(err => console.log(err))
      }
}