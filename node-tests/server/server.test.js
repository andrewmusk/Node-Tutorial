const request = require('supertest');
const expect = require('expect')

var app = require('./server.js').app;

describe('Server', () => {
	describe('get', () => {
		it('should return hello world response', (done) => {
		request(app)
		.get('/')
		.expect((res) => {
			expect(res.body).toInclude({
				error: 'page not found'
			});
		})
		.expect(404)
		.end(done);
		});
	});
	describe('get /users', () => {
		it('should return myself', (done) => {
		request(app)
		.get('/users')
		.expect(200)
		.expect((res) => {
			expect(res.body).toInclude({
				name: 'Andrew',
				age: 20
			})
		})
		.end(done)
		});
	});
});



