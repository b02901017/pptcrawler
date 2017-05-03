import React, { Component } from 'react';

class UsersItem extends Component {
   render() {
    const { index } = this.props;
    return (
          <li key={index}><a href={"#/users/"+ index}>Users {index}</a></li> 
      );
    }
}
class UsersPage extends Component {
  constructor(props) {
    super(props);
    this.state = {numofuser : 0 ,users: []} 
    this.createusers=this.createusers.bind(this);

  }
  handlenum(json){
    
    this.state.numofuser = json;
    this.updateState();
  }
  createusers(){
    for(let i=0 ; i < this.state.numofuser; i++)
      this.state.users.push(i+1);
    this.updateState();
      
  }

  updateState() {
    this.setState({
       numofuser: this.state.numofuser,
       users: this.state.users
    });
  }
  componentDidMount() {
    fetch ('/api/users')
      .then(response => {
        return response.json();
      })
      .then(json => this.handlenum(json))
      .then(this.createusers);

  }
  
  renderUserItem(id) {
    return (
      <UsersItem
        index={id}
      />
    );
  }

  render() {
    return (
      <div>
        {this.state.users.map(this.renderUserItem, this)}
      </div>
    );
  }
}



export default UsersPage;
