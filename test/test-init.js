let chai            = require('chai');
let homeDir         = require('home-dir');
let init            = require('../lib/init.js');
let reset           = require('../lib/reset.js');
let expect          = chai.expect;
let wpgetterHomeDir = homeDir('/.wpgetter');

chai.use(require('chai-fs'));

beforeEach(() => function() {
	reset.parse();
});

let test = init.parse;

describe('init', () =>
  it('should create wpgetter home directory', () => test()
    .then(() => expect(wpgetterHomeDir).to.be.a.directory())
  )
);
