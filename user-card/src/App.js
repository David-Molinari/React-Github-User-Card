import React from 'react';
import axios from 'axios';
import './App.css';
import UserCard from './components/UserCard';

class App extends React.Component {
  constructor () {
    super();
    this.state = {
      users: [],
    }
  }

  componentDidMount() {
    
    const usersArray = ['david-molinari', 'tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell']
    
    usersArray.forEach( item => {
      let string = 'https://api.github.com/users/' + item;
      axios.get(string)
        .then( response => {
          let user = response.data;
          this.setState({ users: [...this.state.users, user ]})
        })
    })

  }

  createUsers = (userArray) => {
    return (
    userArray.map(item => {
      return <UserCard login = {item.login} id = {item.id} />
    })
    )
  }


  render () {
    const userArray = this.state.users;
    console.log(userArray);
      if (userArray.length > 0) {
        return this.createUsers(userArray)
    } else {
      return <p>hi</p>;  
    }
  }
}

export default App;