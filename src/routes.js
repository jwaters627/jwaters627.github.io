import React from 'react';
import {HashRouter, Route} from 'react-router-dom';
import NavBar from './components/NavBar/navBar';
import Home from './components/Home/home';

class Routes extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
  
    };
    }

  render() {
    return(
     <HashRouter history={history}>
		  <div style={{'width':'100%', 'height':'auto', 'minHeight':'100vh',  'background': 'linear-gradient(to top, rgba(255,255,255,0.6), rgba(255,255,255,0.6) 59%, rgba(255,255,255,0.95) 100%)' ,'backgroundSize':'cover', 'boxShadow': 'inset 0 0 0 1000px rgba(173,216,235,.1)'}}>
  			
        <NavBar />
        <Route exact path="/" component={Home} />
  		
  		</div>
	   </HashRouter>

      )
  }
}

export default Routes;