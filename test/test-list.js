let chai   = require('chai');
let expect = chai.expect;

let list = require('../src/list.js');

describe('list', () => {

  let tests = {
    noArgs: Promise.resolve(list.parse()),
    inexistent: Promise.resolve(list.parse(['name', 'unlikely-to-have-ever-existed'])),
  };

  it('should have results', () => tests.noArgs
    .then(result => expect(result).length.above(0))
    .catch(error => {throw error;})
  );

  // it('should have no result for inexistent software', () => tests.inexistent
  //   .then(result => expect(result).to.have.a.lengthOf(0))
  //   .catch(error => {throw error;})
  // );
});
