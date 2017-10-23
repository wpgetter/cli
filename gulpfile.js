let beep     = () => require('play-sound')().play('beep.wav');
let debug    = require('gulp-debug');
let gulp     = require('gulp');
let jscs     = require('gulp-jscs');
let jshint   = require('gulp-jshint');
let mocha    = require('gulp-mocha');
let notify   = require('gulp-notify');
let notifier = require('node-notifier');
let path     = require('path');
let player   = require('play-sound')();
let gulpEach = require('gulp-foreach');

let jsFiles = ['**/*.js', '!./node_modules/**'];

// List JavaScript files.
gulp.task('debug-js-list', () => gulp.src(jsFiles).pipe(debug()));

// List JavaScript files.
gulp.task('debug-beep', () => beep());

// Watch JavaScript files.
gulp.task('watch', ['jshint', 'jscs', 'test'], function () {
  gulp.watch(jsFiles, ['jshint', 'jscs', 'test']);
});

// Check JavaScript.
gulp.task('jscs', function () {
  gulp.src(jsFiles)
    .pipe(jscs())
    .pipe(jscs.reporter())
    .pipe(notify({
      title: 'JSCS',
      message: (file) => {
        if (file.jscs.success) {
          return false;
        }

        beep();
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
    .pipe(notify({
      title: 'JSHint',
      message: (file) => {
        if (file.jshint.success) {
          return false;
        }

        beep();
        let errors = file.jshint.results.map(function (data) {
          if (data.error) {
            return `(${data.error.line}:${data.error.character}) ${data.error.reason}`;
          }
        }).join('\n');
        return `${file.relative} (${file.jshint.results.length} errors)\n${errors}`;
      },

      icon: path.join(__dirname, 'icon.png'),
    })
  );
});

// Run tests.
gulp.task('test', function () {
  gulp.src(['test/test-*.js'])
    .pipe(gulpEach(function (stream, file) {
      return stream
        .pipe(mocha())
        .on('error', (error) => {
          beep();
          notifier.notify({
            icon: path.join(__dirname, 'icon.png'),
            title: 'Test failed',
            message: (`Command: ${error.cmd}`),
          });
        })
      ;
    }));
});

gulp.task('default', ['watch']);
