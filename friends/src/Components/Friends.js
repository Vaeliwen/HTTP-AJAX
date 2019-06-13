import React from 'react';
import axios from 'axios';

export default class Friends extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          friends: [],
            name: null,
            age: null,
            email: null,
    
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
}