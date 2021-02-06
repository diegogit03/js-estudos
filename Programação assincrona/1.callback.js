'use strict'

var callback = (valor) => {
	console.log(valor);
};

var useCallback = (callback) => {
	callback('Callback!');
};

useCallback(callback);

// exemplo de uso

var users = [
	{ id: 1, name: 'Diego', password: '123' },
	{ id: 2, name: 'Douglas', password: '1234' }
];

var callbackToForEach = (user, index) => {
	console.log(user.name);
};

users.forEach(callbackToForEach);