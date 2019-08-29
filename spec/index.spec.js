const request= require('request');
const server = require('../index');


const endpoint = 'http://localhost:3000/hola';

describe('api',function() {
    describe('/hola',function() {
        it('should return "Hola Mundo"', function(done) {
            request.get(endpoint, function(error, response, body) {
                expect(response.statusCode).toEqual(200);
                expect(body).toBe("Hola Mundo");
                done();
            });
        });
    });
});
