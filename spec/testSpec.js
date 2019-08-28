const request= require('request');
const server = require('../index');


const endpoint = 'http://localhost:3000/hola';

describe('API ON',function() {
    it('should return 200 response code', function (done) {
        request.get(endpoint,function(error, response){
            if (!error && response.statusCode == 200) {
                done();
            }
        })
    });
    it('Check Hola Mundo', function(done) {
        request.get(endpoint, function(error, response, body) {
            expect(body).toBe("Hola Mundo");
            done();
        });
    });
});