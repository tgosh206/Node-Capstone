// const chai = require('chai');
// const chaiHttp = require('chai-http');
// const mongoose = require('mongoose');

var expect  = require('chai').expect;
var request = require('request');

it('Initial test', function(done) {
    request('http://localhost:3000' , function(error, response, body) {
        expect(body).to.equal('Hello World');
        done();
    });
});