var webpackConfig = require("./webpack.test");

module.exports = function (config) {
    var _config = {
        basePath: "",
        
        reporters: ['progress', 'html'],
        
            htmlReporter: {
              outputFile: 'tests/units.html',
                    
              // Optional
              pageTitle: 'Unit Tests',
              subPageTitle: 'Composite 2.0',
              groupSuites: true,
              useCompactStyle: true,
              useLegacyStyle: true
            },

        frameworks: [ "jasmine" ],

        files: [
            {pattern: "./karma-test-shim.js", watched: false}
        ],

        preprocessors: {
            "./karma-test-shim.js": [ "webpack", "sourcemap" ]
        },

        webpack: webpackConfig,

        webpackMiddleware: {
            stats: "errors-only"
        },

        webpackServer: {
            noInfo: true
        },
        autowatch: true,

        reporters: [ "progress" ],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: false,
        browsers: [ "Chrome" ],
        singleRun: true
    };

    config.set(_config);
};