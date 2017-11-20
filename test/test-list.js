let chai   = require('chai');
let expect = chai.expect;

let list = require('../src/list.js');

let plugins = [
  {
    name: 'The Test',
    slug: 'test',
    vendor: 'Acme',
    versions: [
      {
        number: '1.2.3',
        published_at: 1500000000,
      },
    ],
  },
];

describe('list', () => {

  let randomString = Math.random().toString(36).substr(2, 5);

  let tests = {
    noArgs: Promise.resolve(list.parse({}, plugins)),
    inexistentName: Promise.resolve(list.parse({ name: `name-${randomString}` }, plugins)),
    inexistentVendor: Promise.resolve(list.parse({ vendor: `vendor-${randomString}` }, plugins)),
    name: Promise.resolve(list.parse({ name: 'The Test' }, plugins)),
    vendor: Promise.resolve(list.parse({ vendor: 'Acme' }, plugins)),
    nameAndVendor: Promise.resolve(list.parse({ name: 'The Test', vendor: 'Acme' }, plugins)),
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

  it('should have 1 result for name and vendor', () => tests.name
    .then(result => expect(result).to.have.a.lengthOf(1))
    .catch(error => {throw error;})
  );
});
