const expect = require.main.require('chai').expect;
const testbuilder = require('../lib/testbuilder');
const testmybot = require('../lib/testmybot');

module.exports.setupMochaTestCases = function(timeout) {

  if (!timeout) timeout = 60000;

  testbuilder.setupTestSuite(
    (testcaseName, testcaseFunction) => {
      it(testcaseName, testcaseFunction).timeout(timeout);
    },
    (response, tomatch, msg) => {
      expect(response).to.include(tomatch, msg);
    },
    (err) => expect.fail(err),
    testmybot.hears,
    testmybot.says
  );
};

module.exports.setupMochaTestSuite = function(timeout) {

  if (!timeout) timeout = 60000;

  var packageJson = require(process.cwd() + '/package.json');
  
  describe('TestMyBot Test Suite for ' + packageJson.name, function() {
  
    before(function(done) {
      this.timeout(timeout);
      testmybot.beforeAll().then(() => done()).catch(done);
    });
    beforeEach(function(done) {
      this.timeout(timeout);
      testmybot.beforeEach().then(() => done()).catch(done);
    });
    afterEach(function(done) {
      this.timeout(timeout);
      testmybot.afterEach().then(() => done()).catch(done);
    });
    after(function(done) {
      this.timeout(timeout);
      testmybot.afterAll().then(() => done()).catch(done);
    });
  
    module.exports.setupMochaTestCases(timeout);
  });
};
