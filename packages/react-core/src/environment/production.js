let protocol = window.location.protocol

const environment = {
  production    : true,
  host          : protocol+'//localhost',
  apiHost       : 'http://api-personal-bank.local',
  apiVersion    :'v1'           
};

export default environment