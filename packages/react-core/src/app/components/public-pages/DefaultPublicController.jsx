import React from 'react'
import {Config} from '../../config/config.js'

export default class DefaultPublicController extends React.Component{
    author(){
        return Config.author
    }
}