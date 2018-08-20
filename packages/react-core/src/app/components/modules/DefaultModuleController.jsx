import React from 'react';

export default class DefaultController extends React.Component{
    
    test(){
        /**
         * This func is accessible on modules
         * You can declare a func just on e time here and you can use that on all 
         * files where you have call this controller
         * Look at the dashboard/home/Home.jsx
         * 
         */
        console.log("This is a test ")
    }
}