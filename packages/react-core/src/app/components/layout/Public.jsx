
import React from 'react'

import Header 	from './partials/Header.jsx';
//import Sidebar 	from './partials/Sidebar.jsx';
import Footer 	from './partials/Footer.jsx';

import { browserHistory } from 'react-router';
import { connect } from 'react-redux'
import Loading 		from 'react-loading';
import { initSession } from './../../actions/start.js';

import { matchRoutes, renderRoutes } from 'react-router-config'

import PublicExtends from './extends/PublicExtends.jsx'

class PublicLayout extends PublicExtends {

	constructor(props) {
		super(props);
		this.state = {};
	}
	componentDidMount(){
	
	}
	componentWillReceiveProps(nextProps){
	
	}
	
	render() {
		return (
            <div>
                <div className="text-center">Public Layout Works</div>
                <div className="container">
                    {this.renderRoutes()}
                </div>
            </div>
		)
	}
}


const mapStateToProps = (state) => {
	return {
		loadingApp: true,
	};
};

export default connect(mapStateToProps)(PublicLayout);
