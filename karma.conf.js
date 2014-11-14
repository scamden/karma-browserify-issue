module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',

        frameworks: ['browserify', 'jasmine'],

        files: [
            'bower_components/angular/angular.js',
            'bower_components/angular-mocks/angular-mocks.js',
            'src/modules/util/*.js'
        ],
        exclude: [],

        preprocessors: {
            'src/modules/util/*.js': ['browserify']
        },
        reporters: ['progress', /*'story',*/ 'coverage'],

        port: 9876,

        colors: true,

        logLevel: config.LOG_INFO,

        autoWatch: true,

        browsers: ['PhantomJS'],

        browserNoActivityTimeout: 3000000,

        singleRun: false,

        reportSlowerThan: 250

    });
};
