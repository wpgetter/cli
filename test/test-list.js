let chai   = require('chai');
let expect = chai.expect;

let list = require('../src/list.js');

let time = Math.floor(Date.now());

let plugins = [
  {
    name: 'The Test',
    slug: 'test',
    vendor: 'Acme',
    versions: [
      {
        number: '1.0.0',
        published_at: time - 1000 + 100,
      },
      {
        number: '1.0.1',
        published_at: time - 1000 + 101,
      },
      {
        number: '2.0.0',
        published_at: time - 1000 + 200,
      },
      {
        number: '9.9.9',
        published_at: time - 1000 + 999,
      },
    ],
  },
];

describe('list', () => {

  let tests = {
    noArgs: Promise.resolve(list.parse({}, plugins)),
    inexistentName: Promise.resolve(list.parse({ name: `whatever` }, plugins)),
    inexistentVendor: Promise.resolve(list.parse({ vendor: `whatever` }, plugins)),
    name: Promise.resolve(list.parse({ name: 'The Test' }, plugins)),
    vendor: Promise.resolve(list.parse({ vendor: 'Acme' }, plugins)),
    nameAndVendor: Promise.resolve(list.parse({ name: 'The Test', vendor: 'Acme' }, plugins)),
    newestVersion: Promise.resolve(list.parse({}, plugins)),
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

  it('should have 1 result for name', () => tests.name
    .then(result => expect(result).to.have.a.lengthOf(1))
    .catch(error => {throw error;})
  );

  it('should have 1 result for vendor', () => tests.vendor
    .then(result => expect(result).to.have.a.lengthOf(1))
    .catch(error => {throw error;})
  );

  it('should return newest version (9.9.9)', () => tests.newestVersion
    .then(result => expect(result[0].versions[0].number).to.equal('9.9.9'))
    .catch(error => {throw error;})
  );
});
