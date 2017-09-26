import React from 'react';
import classNames from 'classnames';

import Crimson from '../../img/crimson.png';
import styles from './projectContainer.scss';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import RightArrow from 'react-material-icons/icons/hardware/keyboard-arrow-right';
import Cancel from 'react-material-icons/icons/navigation/cancel';

class ProjectContainer extends React.Component {


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
      more: false,
    };
    }

    showMore = () =>{
      this.setState({more: true});
    }

    showLess = () =>{
      this.setState({more: false});
    }

  render() {
    let openClass = classNames(
          'moreInfo',
          {
            'show': (this.state.more)
          } 
        )
    let link = (<a href={this.props.url}>
            <p>Click Here to View Project</p>
          </a>);
    if(!this.props.url){link = <div></div>}

    return(
      <div className="projectContainer">
        <div onClick={this.showMore} className='projectImageContainer'>
          <img src={this.props.image} />
        </div>
        <h4>{this.props.title}</h4>
        <p>{this.props.description}</p>
        <div className='moreButton'>
          <p onClick={this.showMore}>MORE</p>
          <RightArrow style={{'display': 'inline-block', 'float': 'right'}}/>
        </div>
        <div className={openClass}>
          <h4>{this.props.title}</h4>
          <p>{this.props.longerDescription}</p>
          {link}
          <Cancel style={{'color': '#000', 'float': 'right', 'position': 'absolute', 'top':'6px', 'right': '6px'}} onClick={this.showLess}/>
        </div>
      </div>
      )

  }
}

export default ProjectContainer;