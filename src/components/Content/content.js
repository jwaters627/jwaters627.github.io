import React from 'react';

import AboutMe from '../AboutMe/aboutMe';
import Projects from '../Projects/projects';
import Contact from '../Contact/contact';
import styles from './content.scss';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

class Content extends React.Component {


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
      <div className="content">
        <AboutMe />
        <Projects />
        <Contact />
      </div>
      )

  }
}

export default Content;