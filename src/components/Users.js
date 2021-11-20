import React, { Component } from 'react';
// add any needed imports here
import { connect } from 'react-redux'
class Users extends Component {

  render() {
    let users = this.props.users.map((user, i) => <li key={i}>{user.username}</li>)
    return (
      <div>
        <ul>
          Users!
          {users}
          {/* Write code here that displays the usernames of all users in the Redux store */}
          {/* In addition, display the total number of users curently in the store */}
          {this.props.numberOfUsers}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here

const mapStateToProps = (state) => {
   return {
     users: state.users,

     numberOfUsers: state.users.length
   };
}



// connect this component to Redux
export default connect(mapStateToProps)(Users)
