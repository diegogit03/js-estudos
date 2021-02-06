var sendEmail = (to, title, text) => {
	return new Promise((resolve, reject) => {
		if(typeof to === 'string' && typeof title === 'string' && typeof text === 'string') {
			setTimeout(() => {
				resolve({
					to,
					title,
					text
				});
			}, 5000);
		} else {
			reject('information invalid!');
		}
	});
};

sendEmail('diego@email.com', 'title', 'Hei!').then(email => {
	var headerToTable = '';
	Object.keys(email).forEach(key => {
		headerToTable += ' ' + key + ' | ';
	});
	console.log(headerToTable);

	var tableColumn = '';
	// Object.arguments(email).forEach(item => {
	// 	tableColumn += ' ' + item + ' | ';
	// });
	console.log(Object.arguments(email));
});
