import React from 'react';

import ProjectContainer from '../ProjectContainer/projectContainer';
import Crimson from '../../img/crimson.png';
import Reporting from '../../img/reporting.png';
import WhereWorld from '../../img/whereWorld.png';
import Wedding from '../../img/wedding.png';
import styles from './projects.scss';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

class Projects extends React.Component {


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
      <div className="projects" id="projectsSection">
          <ProjectContainer 
              url="http://s3.amazonaws.com/design.inconceivable.ch/crimson/index.html" 
              image={Crimson} 
              description="Prototype built in React of an entire platform overhaul" 
              title="Crimson Hexagon - Platform"
              longerDescription= "I was tasked to create a prototype that would be used by the sales team to show what our platform overhaul would look and act like. Some things had to be faked with screen shots as the purpose of this was to iterate quickly and get something in front of the sales team to show clients. Key items were to show a new landing page with easy access to the four main areas of the platform and to show a platform wide search functionality in the nav bar. This was created using React and as many reusable components as possible."
          />
          <ProjectContainer 
              image={WhereWorld} 
              description="Application built using Angular that takes input from a user about their interests and returns trips that match those interests." 
              title="Where in the World"
              longerDescription='This is an application built using Angular that allows users to click through a series of preferences to find a trip suggestion that matches their interests. Users have the option to click for a randomized trip rather than going through the selection process as well. This project is not hosted publicly as it was built as an intro to Angular, but can be showed if there is interest.'
          />
          <ProjectContainer 
              url='http://s3.amazonaws.com/design.inconceivable.ch/reporting/index.html' 
              image={Reporting} 
              description="Reporting application that lets users input sets of data and visualization types to add onto a canvas." 
              title="Crimson Hexagon - Reporting"
              longerDescription='This was a project to help develop a reporting application for Crimson Hexagon. Users can select different data sets to compare and then create charts by choosing visualization types and colors for the data sets. The charts can then be resized and moved around the canvas. The project was created using React and D3 to create the different charts. There are still some glitches in this implementation as I was not allowed to take the final iteration with me to show off, but the look and feel of the application as well as most of the functionality is there.'
          />
          <ProjectContainer 
              url='http://www.jamieandkara.com' 
              image={Wedding} 
              description="I am getting married in May and built out our wedding website with profiles on the wedding party, suggestions of things to do in Portland, hotels and more." 
              title="Wedding"
              longerDescription="I wanted to create a custom made website for our wedding, so my Fiancee and I designed our site. The people in our wedding are important to us, so we wanted to build in a wedding party section where you can click through a number of pictures that are some of our favorite memories. We also love portland, so wanted to provide plenty of information to guests about the area and some of our favorite places to check out."
          />
      </div>
      )

  }
}

export default Projects;