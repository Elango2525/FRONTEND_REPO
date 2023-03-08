//import React from 'react'
import axios from 'axios'



import React, { Component } from 'react'

export class Show extends Component {
  state = {
    data: []
    }
  
    componentDidMount() {
    axios.get('http://127.0.0.1:8080/showDetails')
      .then(response => {
        this.setState({ data: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }
  
  render() {
    return (
      <div>
        <div className="bimg1">
        <center><h1 id="Post">Find All Project Here!</h1></center>
        {/* <h2>Post</h2> */}
        <div id="boxP">
        <table border={1}>
      <thead>
        <tr>
          <th>projectNo</th>
          <th>projectName</th>
          <th>frontend</th>
          <th>backend</th>
          <th>projectlink</th>
        </tr>
      </thead>
      <tbody>
        {this.state.data.map(user => (
          <tr key={user.projectNo}>
            <td>{user.projectNo}</td>
            <td>{user.projectName}</td>
            <td>{user.frontend}</td>
            <td>{user.backend}</td>
            <td>{user.projectlink}</td>
          </tr>
        ))}
      </tbody>
    </table>

        </div>
        </div>
    </div>
    )
  }
}

export default Show