import React from 'react';


import styles from './aboutMe.scss';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import profilePic from '../../img/profile.png';
import sunset from '../../img/sunset.png';

class AboutMe extends React.Component {


    static childContextTypes =
    {
        muiTheme: React.PropTypes.object
    }

    getChildContext()
    {
        return {
            muiTheme: getMuiTheme({
                palette:{
                   
                }
            })
        }
    }

  constructor(props) {
    super(props);
    this.state = {
      
    };
    }

  render() {
    return(
      <div className="aboutMe" id="aboutMeSection" style={{"background": "linear-gradient(0deg,rgba(0,0,0,0.6), rgba(100,100,100,0.4)), url("+sunset +")", "backgroundSize":"cover"}} >
          <img src={profilePic} />
          <p>I am a front end developer who has tried many things and failed many times before arriving at a career as a web developer. I am somebody who believes that you should never settle in life and should work hard to create the life you want all while learning as much as possible in the moment. This belief eventually led me to development, but the lessons that I learned in earning a degree in Physics, playing college soccer and then teaching allow me to problem solve efficiently while making any team I am on better. I am a builder and a problem solver who wants to create things that make peoples lives easier.</p>
      </div>
      )

  }
}

export default AboutMe;