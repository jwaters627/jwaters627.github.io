import React from 'react';
import styles from './home.scss';

import Content from '../Content/content';

import NavBar from '../NavBar/navBar';


export default class Main extends React.Component {
	

	render() {
		return(
			<div>
				<NavBar />
				<Content />
			</div>
		)
	}
}