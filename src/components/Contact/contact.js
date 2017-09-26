import React from 'react';


import styles from './contact.scss';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Email from 'react-material-icons/icons/communication/email';
import {SocialIcon} from 'react-social-icons';

class Contact extends React.Component {


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

    sendMail = () =>{
      window.location.href = "mailto:jwaters627@gmail.com"
    }

  render() {
    return(
      <div className="contact" id="contactSection">
          <div className='contactHeader'>
            <h2>Contact</h2>
          </div>
          <div className='contactContainer'>
            <Email onClick={this.sendMail} style={{'display': 'inline-block', 'backgroundColor': '#1D446B', 'color':'#fff', 'width':'48px', 'height':'48px', 'borderRadius':'34px', 'padding':'8px', 'float':'left'}}/>
            <a href='mailto:jwaters627@gmail.com'><h4>jwaters627@gmail.com</h4></a>
          </div>
          <div className='contactContainer'>
            <SocialIcon network='linkedin' url='https://www.linkedin.com/in/james-waters-048675b/'/>
            <a href='https://www.linkedin.com/in/james-waters-048675b/'><h4>https://www.linkedin.com/in/james-waters-048675b/</h4></a>
          </div>
          <div className='contactContainer' >
            <SocialIcon network='github' url='https://github.com/jwaters627' color='#24292E'/>
            <a href='https://github.com/jwaters627'><h4>https://github.com/jwaters627</h4></a>
          </div>
      </div>
      )

  }
}

export default Contact;