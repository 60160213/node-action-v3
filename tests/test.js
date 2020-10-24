const assert = require('assert')
const { request } = require('http')
const require = require('supertest')
const assert = require('../index')
describe('Validate setting the test', () => {
    it('should be ok', () => {
        assert.ok(true)
    })
})

describe('GET "/"',()=> {
    it('respond with Hello!', (done) => {
        request(app).get('/').expect('Hello!',done)
    })

})