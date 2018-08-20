import environment from '../../environment/environment.js'

export const Config = {
    headers: { 
        'Content-Type': 'application/x-www-form-urlencoded' //'application/json' 
    },
    credentials:"same-origin"
};


function Api(){
    let ApiUrl = environment.apiHost

    return {
        v1:{
            auth:{
                check: ApiUrl+'/login'
            },
            dashboard:{
                list:ApiUrl+'/list'
            }
            //All your api endpoint
        }
    }
} 

export default Api()[environment.apiVersion]

