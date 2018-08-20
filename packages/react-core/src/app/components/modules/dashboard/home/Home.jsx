
import  React  from "react";
import DashboardController from '../DashboardController.jsx'

class Home extends DashboardController{
    render(){
        this.test() //This func is declared to DefaultModuleController.jsx

        return(<h1 class='text-center'>Dashboard Home Work</h1>)
    }
}

export default Home;