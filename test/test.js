var chai = require('chai')
var expect = require('chai').expect
var nock = require('nock')

const Url = 'http://localhost:8080/'

describe('Testing Shopping Cart', function(){

  it('should return an array of customer addresses', () => {
  // Intercept the API request
  nock(Url)
    .get('/api/customers')
    .reply(200, 'path using function matched')
  })

})
