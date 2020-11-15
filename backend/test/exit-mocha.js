// File for preventing travis from hanging after mocha tests
const Figure = require('../api/model');

after('Exit mocha gracefully after finishing test execution', function() {
    process.exit(0);
});

