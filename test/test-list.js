let chai    = require('chai');
let homeDir = require('home-dir');

let expect = chai.expect;

let list  = require('../lib/list.js');

let wpgetterHomeDir = homeDir('/.wpgetter')

describe('wpgetter', function () {
  describe('list', function () {
    it('should have no result for inexistent theme or plugin', function () {
      let args = ['name', 'unlikely-to-have-ever-existed'];
      list.parse(args).then(function (items) {
        expect(items).to.have.lengthOf(0);
      }).catch(function () {
        process.exit(255);
      });
    });
  });
});
