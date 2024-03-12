const uuidlib= require('uuid');
  
function generateId() {
	        return uuidlib.v3('J7KKxwALZR', uuidlib.v4());
	}

module.exports = generateId
