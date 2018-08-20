import Api,{ Config } from '../../config/endpoint.js'

/********************************
*   This is a example of request api.
*/
export function list(values) {
	
  return (dispatch) => {
    return fetch(
        Api.dashboard.list,
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
