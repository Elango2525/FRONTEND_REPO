import React,{ Component } from 'react'
import { Link } from 'react-router-dom'
import './Main.css'
function Main() {
  return (
        
    <div>
      <div className="bimg">
        <br></br>
        <center><h1 id="he">Project Finder</h1></center>
        <br></br>
              <br></br>
              <br></br>
              <br></br>
              <div className="homebox">
                <a><Link to="New">
             <input id="crud" type="Submit" value="Add new Project"></input>
             </Link></a>
              
            <a><Link to="Upd">
            <input id="crud1" type="Submit" value="Update my Project"></input>
            </Link></a>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
            <a><Link to="Del">
            <input id="crud" type="Submit" value="Delete my project"></input>
            </Link></a>
              
              
            <a><Link to="Show">
            <input id="crud1" type="Submit" value="Show projects"></input>
            </Link></a>
            </div>
              
          
          </div>
        </div>
    
    
  )
}

export default Main