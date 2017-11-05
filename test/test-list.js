let chai   = require('chai');
let expect = chai.expect;

let list = require('../lib/list.js');

describe('wpgetter', () => {
  describe('list', () => {

    let testNoArgs     = Promise.resolve(list.parse());
    let testInexistent = Promise.resolve(list.parse(['name', 'unlikely-to-have-ever-existed']));

    it('should have no result for inexistent software', () => testInexistent
      .then(result => expect(result).to.have.a.lengthOf(0))
      .catch(error => {throw error;})
    );

    it('should have some results when called without arguments', () => testNoArgs
      .then(result => expect(result).to.have.length.above(0))
      .catch(error => {throw error;})
    );
  });
});
