const utils = require('./utils');
const expect = require('expect');

describe('Utils', () => {
	
	describe('add', () =>
	{
		it('should add two numbers', () => {
			var result = utils.add(33,11);
			expect(result).toBe(44).toBeA('number');
		});

		it('should async add two numbers', (done) => {
			var result = utils.asyncAdd(4,3, (sum) => {
				expect(sum).toBe(7).toBeA('number');
				done();
			});
		});
	});


	it('should square a number', () => 
	{
		var result = utils.square(4);
		expect(result).toBe(16).toBeA('number');
	});

	it('should square a number', (done) => 
	{
		var result = utils.asyncSquare(4, (square) => {
			expect(square).toBe(16).toBeA('number');
			done();
		})
		
	});

});



// it('should expect some values', () => {
// 	//expect(12).toNotBe(11);
// 	//expect({name: 'Andrew'}).toEqual({name: 'Andrew'})
// 	expect([2,3,4]).toInclude(2);
// });

it('should verify first and last names set', () => {
	var user = {firstName: 'Andrew', lastName: 'Musk'};
	var fullname = 'James Musk';
	var new_user = utils.setName(user,'James Musk');
	expect(new_user).toInclude({firstName: 'James', lastName: 'Musk'});
});