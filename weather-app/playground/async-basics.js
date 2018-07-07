console.log('Starting app');



setTimeout(() => {
	console.log('inside of the callback');
}, 2000);

setTimeout(()=> {
	console.log('The second timeout');
},0);

console.log('Finishing up');