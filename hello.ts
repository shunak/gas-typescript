const greeter = (person: string) => {
	return`Hello, ${person}!`;
}

function testGreeter(){
	const user = 'Richard';
	Logger.log(greeter(user));
}



