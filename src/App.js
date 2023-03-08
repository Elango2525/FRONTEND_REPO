// import React from 'react'
import React, {component} from 'react'
import Ela from './Ela'
import Signup from './Signup'
import Main from './Main'
import New from './New';
import Del from './Del';
import Upd from './Upd';
import Show from './Show';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';

function App() {
  return (
	<Router>
<div className='App'>
	{/* <Main></Main> */}
	<Switch>
		<Route exact path="/" component={Ela}></Route>
		<Route exact path="/Ela" component={Ela}></Route>
		<Route exact path="/Main" component={Main}></Route>
		<Route exact path="/Signup" component={Signup}></Route>
		<Route exact path="/New" component={New}></Route>
		<Route exact path="/Del" component={Del}></Route>
		<Route exact path="/Upd" component={Upd}></Route>
		<Route exact path="/Show" component={Show}></Route>
			</Switch>
			</div>

			 </Router>
	
		


	
  );
  }


export default App