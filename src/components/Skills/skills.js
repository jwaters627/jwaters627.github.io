import React from 'react';
import FontAwesome from 'react-fontawesome';

import styles from './skills.scss';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import htmlIcon from '../../../dist/img/htmlIcon.png';
import cssIcon from '../../../dist/img/cssIcon.png';
import jsIcon from '../../../dist/img/javascriptIcon.png';
import reactIcon from '../../../dist/img/reactIcon.png';
import webpackIcon from '../../../dist/img/webpackIcon.png';
import bootstrapIcon from '../../../dist/img/bootstrapIcon.png';
import sassIcon from '../../../dist/img/sassIcon.png';

class Skills extends React.Component {


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
      <div className="skills" id="skillsSection">
          <div className='skillsHeader'>
            <h2>Skills</h2>
          </div>
          <div className='skillsContainer'>
            <img src={htmlIcon} />
            <h4>HTML</h4>
          </div>
          <div className='skillsContainer'>
            <img src={cssIcon} />
            <h4>CSS</h4>
          </div>
          <div className='skillsContainer'>
            <img src={sassIcon} />
            <h4>SASS</h4>
          </div>
          <div className='skillsContainer' >
           <img src={jsIcon} />
           <h4>Javascript</h4>
          </div>
          <div className='skillsContainer' >
           <img src={reactIcon} />
           <h4>React</h4>
          </div>
          <div className='skillsContainer' >
           <img src={webpackIcon} />
           <h4>Webpack</h4>
          </div>
          <div className='skillsContainer' >
           <img src={bootstrapIcon} />
           <h4>Bootstrap</h4>
          </div>
      </div>
      )

  }
}

export default Skills;