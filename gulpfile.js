let gulp   = require('gulp');
let jscs   = require('gulp-jscs');
let jshint = require('gulp-jshint');
let mocha  = require('gulp-mocha');
let notify = require('gulp-notify');
let path   = require('path');
var player = require('play-sound')(opts = {});

let jsFiles = ['**/*.js', '!./node_modules/**'];

// Watch JavaScript files
gulp.task('watch', ['jshint', 'jscs', 'test'], function () {
  gulp.watch(jsFiles, ['jshint', 'jscs', 'test']);
});

// Check JavaScript.
gulp.task('jscs', function () {
  gulp.src(jsFiles)
    .pipe(jscs())
    .pipe(jscs.reporter())
    .pipe(notify({
      message: (file) => {
        if (file.jscs.success) {
          return false;
        }

        player.play('beep.wav');
        let errors = file.jscs.errors._errorList.map(function (data) {
          return `(${data.line}:${data.column}) ${data.message}`;
        }).join('\n');
        return `${file.relative} (${file.jscs.errorCount} errors)\n${errors}`;
      },

      icon: path.join(__dirname, 'icon.png'),
    }))
  ;
});

// Check JavaScript.
gulp.task('jshint', function () {
  gulp.src(jsFiles)
    .pipe(jshint())
    .pipe(jshint.reporter())
    .pipe(notify(function (file) {
      if (file.jshint.success) {
        return false;
      }

      var errors = file.jshint.results.map(function (data) {
        if (data.error) {
          return `(${data.error.line}:${data.error.character}) ${data.error.reason}`;
        }
      }).join('\n');
      return `${file.relative} (${file.jshint.results.length} errors)\n${errors}`;
    }));
});

// Run tests.
gulp.task('test', function () {
  gulp.src(['test/test-*.js'])
    .pipe(mocha())
    .pipe(notify(function (file) {
      if (file.jshint.success) {
        return false;
      }

      var errors = file.jshint.results.map(function (data) {
        if (data.error) {
          return `(${data.error.line}:${data.error.character}) ${data.error.reason}`;
        }
      }).join('\n');
      return `${file.relative} (${file.jshint.results.length} errors)\n${errors}`;
    }));
});

gulp.task('default', ['watch']);
