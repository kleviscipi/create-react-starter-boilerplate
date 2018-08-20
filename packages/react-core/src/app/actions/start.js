import Api,{ Config } from '../config/endpoint.js'

/********************************
*   This is a example of request api.
*   Example Call Api per your check auth system:
*/
export function auth(values) {
	
  return (dispatch) => {
    return fetch(
        Api.auth.check,
    {
		method: 'GET',
		credentials:Config.credentials,
		headers: Config.headers
    }).then((response) => {
      if (response.ok) {
        return response.json().then((json) => {
			if(json.data.login){
				dispatch({
					type: 'SET_SESSION',
					session: [json.data]
				  });
			}else{
				dispatch({
					type: 'REDIRECT'
				});
			}
        });
      } else {
        return response.json().then((json) => {
          dispatch({
            type: 'REDIRECT'
          });
        });
      }
    });
  };
  
}

/**
 * Simulation 
 * You can replacing them like auth example
 */

export function login(values) {

  return (dispatch,endpoint) => {

		dispatch({
			type: 'CLEAR_MESSAGES',
	 	});

  		if(values.password.trim() == '123456' && values.email.trim()=='cipiklevis@gmail.com'){

			dispatch({
				type: 'LOGIN_SUCCESS',
				logged: true
		 	});

			dispatch({
				type: 'SUCCESS_MESSAGES',
				messages: ['Logged successfully']
		 	});
  		
  		}else{

			dispatch({
				type: 'LOGIN_FALURE',
				logged: false
		 	});

			dispatch({
				type: 'ERROR_MESSAGES',
				messages: ['Email or password wrong!']
		 	});
			
  		}


  };
  
}

export function singUp(values){

	let valids = {
		password    :" Password is empty",  
		email 		:' Email is empty ',
		username 	:" Username is empty",
		name 		:' Name is empty',
		subname 	:'Subname is empty',
	};

  return (dispatch) => {
		dispatch({
			type: 'CLEAR_MESSAGES',
	 	});
		let e = 0;
		let messages = [];
		Object.keys(values).map((r)=>{

			console.log(r);

			if( values[r] == "" ){

				dispatch({
					type: 'SINGUP_FALURE',
					singup: false
			 	});
				messages.push(valids[r]) ;
			}else{
				e++;
			}
		});

		dispatch({
			type: 'ERROR_MESSAGES',
			messages: messages
	 	});

		if(e == Object.keys(values).length){
			
			dispatch({
				type: 'SUCCESS_MESSAGES',
				messages: ['Singup successfully.']
		 	});	
			setTimeout(function(){

			dispatch({
				type: 'SINGUP_SUCCESS',
				singup: true
		 	});	

			},1000)

		}


  };

}

export function loadProfile(values) {
	
  return (dispatch) => {
  			//BEFORE CALL API
			dispatch({
				type: 'START_PROFILE',
				loading:true
		 	});

			dispatch({
				type: 'RENDER_PROFILE',
				profile: {
					name:'Klevis Cipi',
					email:'cipiklevis@gmail.com',
					description:"This is my profile"
				}
		 	});

  			//AFTER CALL API
			dispatch({
				type: 'END_PROFILE',
				loading:false
		 	});

  };
  
};


export function clearMsg(){
	
  return (dispatch) => {
  		console.log("ok")
		dispatch({
			type: 'CLEAR_MESSAGES',
	 	});

  };	
};
