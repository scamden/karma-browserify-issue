var gulp = require('gulp');
var karma = require('gulp-karma');
var argv = require('yargs').argv;
var istanbul = require('browserify-istanbul');

var karmaConf;
require('./karma.conf.js')({
    set: function (conf) {
        karmaConf = conf;
    }
});

gulp.task('karma-watch', function () {
    console.log('starting karma watch');
    var opts = {
        configFile: 'karma.conf.js',
        action: 'watch'
    };

    return gulp.src(karmaConf.files)
        .pipe(karma(opts));
});