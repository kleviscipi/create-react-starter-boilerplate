import React from 'react'
import { browserHistory } from 'react-router';
import { connect } from 'react-redux'
import Loading 		from 'react-loading';
import { initSession } from './../../../actions/start.js';

import environment  from '../../../../environment/environment.js'

import { matchRoutes, renderRoutes } from 'react-router-config'

export default class DefaultExtends extends React.Component{


    renderRoutes(){
        const { route } = this.props;

        return renderRoutes(route.routes,
            {environment:this.getEnvironment()}
        )
    }
    isProduction(){
        if(process.env.NODE_ENV=="production"){
            return true
        }
        return false
    }
    getEnvironment(){
        return environment
    }
}