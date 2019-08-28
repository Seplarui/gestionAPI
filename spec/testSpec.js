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

/*describe ('Hola Mundo', function() {
    it('the correct word', function(done) {
        const defaultButtonText = "Hola Mundo";
       // body = document.getElementsByTagName
       //expect(view.el.html().indexOf('Hola Mundo') != -1 ).toBe(true);
       //expect(reviewElement.getText()).toEqual("My text");
       expect(document.getElementsByTagName("body")).toEqual("kk");
    })
})*/