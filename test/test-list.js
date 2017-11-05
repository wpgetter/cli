let chai   = require('chai');
let expect = chai.expect;

let list = require('../lib/list.js');

describe('list', () => {

  let tests = {
    noArgs: Promise.resolve(list.parse()),
    inexistent: Promise.resolve(list.parse(['name', 'unlikely-to-have-ever-existed'])),
  };

  it('should have no result for inexistent software', () => tests.inexistent
    .then(result => expect(result).to.have.a.lengthOf(0))
    .catch(error => {throw error;})
  );

  it('should have some results when called without arguments', () => tests.noArgs
    .then(result => expect(result).to.have.length.above(0))
    .catch(error => {throw error;})
  );
});
