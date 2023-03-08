//import React from 'react'
import './Main.css'
import React, { Component } from 'react'
import axios from 'axios'
export class New extends Component {
  constructor(props) {
    super(props);
    this.state = {
        projectNo:'',
        projectName:'',
        frontend: '',
        backend: '',
        projectlink:''
    };
  }

  handleprojectNoChange = (event) => {
    this.setState({ projectNo: event.target.value });
  };

  handleprojectNameChange = (event) => {
    this.setState({ projectName: event.target.value });
  };

  handlefrontendChange = (event) => {
    this.setState({ frontend: event.target.value });
  };

  handlebackendChange = (event) => {
    this.setState({ backend: event.target.value });
  };

  handleprojectlinkChange = (event) => {
    this.setState({ projectlink: event.target.value });
  };

  

  handleSubmit = (event) => {
    event.preventDefault();
    const data = {
        projectNo: this.state.projectNo,
        projectName: this.state.projectName,
        frontend: this.state.frontend,
        backend: this.state.backend,
        projectlink: this.state.projectlink,
        
      };
    
      axios.post('http://127.0.0.1:8080/addDetails', data)
  };

  render() {
    return (
      <div>
        <div className="bimg1">
        <center><h1 id="Post">Add Your New Project Here!</h1></center>
        {/* <h2>Post</h2> */}
        <div id="boxP">
        <form onSubmit={this.handleSubmit} >
            <label id="l" for="gid" >Project No:</label>
            <br></br>
            <input id="ip" type="text" value={this.state.projectNo}
          onChange={this.handleprojectNoChange} placeholder="     Enter your project No:"></input>
            <br></br>
            <br></br>
            <br></br>
            <label id="l" for="gname">Project Name:</label>
            <br></br>
            <input id="ip" type="text" value={this.state.projectName}
          onChange={this.handleprojectNameChange} placeholder="    Enter your project Name:"></input>
            <br></br>
            <br></br>
            <br></br>
            
            <label id="l" for="gname">Frontend Language:</label>
            <br></br>
            <input id="ip" type="text" value={this.state.frontend}
          onChange={this.handlefrontendChange} placeholder="    Enter your Frontend Language:"></input>
            <br></br>
            <br></br>
            <br></br>
            <label id="l" for="gname">Backend Language:</label>
            <br></br>
            <input id="ip" type="text" value={this.state.backend}
          onChange={this.handlebackendChange} placeholder="    Enter your Backend Language:"></input>
            <br></br>
            <br></br>
            <br></br>
            
            
            <div>
            <label id="l">Paste your project Link</label><br></br>
    <input type="text" id="ip" name="text"  value={this.state.projectlink}
          onChange={this.handleprojectlinkChange} placeholder='Github Link'/>
  </div>
     <br></br><br></br>
            <center><input class="smt2" type="submit" value="Add"></input></center>
        </form>
        </div>
        </div>
    </div>
    )
  }
}

export default New