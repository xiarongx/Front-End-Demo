var path = require('path');
module.exports = {
    // there was a typo here
    frameworks: ['mocha', 'chai'],
    browsers: ['Chrome'],
    files: [
        // Paths of your source and test scripts
        '../src/index.js',
        '../test/index.test.js'
    ],
    //customContextFile: path.resolve('./test/fixture.html'),
    reporters: ['spec','junit'],
    junitReporter: {
        outputDir: '../testResult',
        suite: 'models'
    },
    client: {
        captureConsole: true
    },
    singleRun: true
}