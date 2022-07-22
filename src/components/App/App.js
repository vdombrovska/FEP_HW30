import './css/App.css';
import { API_URL } from '../../config';
import NewUsersForm from '../UsersForm/UsersForm';
import UsersList from '../components/UsersList/UsersList.js'
import {getUserList, removeUser, createUser} from '../api.js'
import React, { Component } from 'react';


export default class App extends Component () {
  state = {
    list: [],
  };

  //getNewUser = (e) =>{
       // this.setState ({
       //   [e.target.name]:e.target.value
       // })
    //return NewUser;}
  
  createUser = (NewUser) => {
    if (!this.validationInputs()){
      return 'Check your info'
    }
    
    this.setState({
        list: [...this.state.list, { ...NewUser, id: Date.now() }],
    });
  };

  validationInputs = (value) => {
    return value !== '';
  }

  removeUser = (id) => {
    const newList = this.state.list.filter((item) => item.id !== id);

    this.setState({
        list: newList,
    });
    return removeUser(id);
  };

  fetchList() {
    return getUserList()
         .then((data) => this.setState({ list: data }))
   };
  

  render() {
    return (
        <div className="container">
            <UsersList
                list={this.state.list}
                onRemove={this.removeUser}
            />
            <NewUsersForm onSave={this.createUser} />
        </div>
    );
}
}


