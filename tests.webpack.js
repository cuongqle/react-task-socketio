import 'babel-polyfill'
import chai from 'chai'
import chaiImmutable from 'chai-immutable';

chai.use(chaiImmutable);
global.chai = chai;
global.expect = chai.expect;
global.should = chai.should();

const __karmaWebpackManifest__ = []; // eslint-disable-line
const inManifest = (path) => ~__karmaWebpackManifest__.indexOf(path);

var testsContext = require.context('./tests', true, /\.test\.(js|jsx)$/); //make sure you have your directory and regex test set correctly!

const testsToRun = testsContext.keys().filter(inManifest)
;(testsToRun.length ? testsToRun : testsContext.keys()).forEach(testsContext);