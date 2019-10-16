const request = require('request');


const endpoint = 'http://localhost:3000/api/empresa';

describe('connection_bbdd', function () {

    describe('/api/empresa', function () {
        it('should return status (200)', function (done) {
            request.get(endpoint, function (error, response, body) {
                expect(response.statusCode).toEqual(200);
                done();
            })
        })
    })

    describe('connection bbdd', function() {
        it('should return connection to bbdd OK', function (done) {
            /*request.get(endpoint, function (error, response, body) {
                expect(response.statusCode).toEqual(200);
                done();
            })*/
        })   
    })
});