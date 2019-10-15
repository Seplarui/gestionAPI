const request= require('request');
const server = require('../index');


const endpoint = 'http://localhost:3000/api/empresa';

describe('connection_bbdd', function() {

    describe('/api/empresa', function() {
        it('should return status (200)', function(done) {
            request.get(endpoint, function(error, response,body) {
                console.log("statusCode: "+ response.statusCode);
                console.log("error: "+error);
                console.log("response: "+response);
                expect(response.statusCode).toEqual(200);
                done();
            })
        })
    })

});