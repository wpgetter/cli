let chai   = require('chai');
let expect = chai.expect;

let list = require('../src/list.js');

describe('list', () => {

  let randomString = Math.random().toString(36).substr(2, 5);

  let tests = {
    noArgs: Promise.resolve(list.parse({})),
    inexistentName: Promise.resolve(list.parse({ name: `name-${randomString}` })),
    inexistentVendor: Promise.resolve(list.parse({ vendor: `vendor-${randomString}` })),
  };

  it('should have results', () => tests.noArgs
    .then(result => expect(result).length.above(0))
    .catch(error => {throw error;})
  );

  it('should have no result for inexistent name', () => tests.inexistentName
    .then(result => expect(result).to.have.a.lengthOf(0))
    .catch(error => {throw error;})
  );

  it('should have no result for inexistent vendor', () => tests.inexistentVendor
    .then(result => expect(result).to.have.a.lengthOf(0))
    .catch(error => {throw error;})
  );
});
