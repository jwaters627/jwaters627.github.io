import React from 'react';

import { Link } from 'react-scroll';
import styles from './navBar.scss';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

class NavBar extends React.Component {


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
      <div className="navContainer">
        <div className='title'>
          <h1>Jamie<br/> Waters</h1>
          <h4>Front End Developer</h4>
        </div>
        <div>
          <Link className='navItem' activeClass='active' to="aboutMeSection" spy={true} smooth={true} duration={500}>
            <p>ABOUT ME</p>
          </Link>
          <Link className='navItem' activeClass='active' to="skillsSection" spy={true} smooth={true} duration={500}>
            <p>SKILLS</p>
          </Link>
          <Link className='navItem' activeClass='active' to="projectsSection" spy={true} smooth={true} duration={500}>
            <p>PROJECTS</p>
          </Link>
          <Link className='navItem' activeClass='active' to="contactSection" spy={true} smooth={true} duration={500}>
            <p>CONTACT</p>
          </Link>
          <a className='navItem' href='/src/JamieWatersResume.pdf' target='blank'><p>RESUME</p></a>
        </div>
      </div>

      )

  }
}

export default NavBar;