let chai   = require('chai');
let expect = chai.expect;

let list = require('../lib/list.js');

describe('wpgetter', () => {
  describe('list', () => {

    let test = Promise.resolve(list.parse(['name', 'unlikely-to-have-ever-existed']));

    it('should have no result for inexistent software', () => test
      .then(result => expect(result).to.have.a.lengthOf(0))
      .catch(error => {throw error;})
    );
  });
});
