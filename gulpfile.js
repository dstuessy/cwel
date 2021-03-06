const gulp             = require('gulp');
const gulpSequence     = require('gulp-sequence');
const multiSync        = require('./gulp-lib/browser-sync-multi');
const rename           = require('./gulp-lib/rename');

require('gulp-task-loader')('gulp-tasks');

gulp.task('rename', done => rename('.', done));

gulp.task('build', done => gulpSequence('cwel:build', 'test:build', 'sandbox:build', 'docs:build')(done));

gulp.task('dev', done => gulpSequence('sandbox:build', 'docs:build')(done));

gulp.task('sandbox', done => gulpSequence('sandbox:build')(done));

gulp.task('test-unit', done => gulpSequence('test:unit:build', 'test:unit:run')(done));

gulp.task('test-e2e', done => gulpSequence(['sandbox:build', 'test:e2e:build'], 'test:e2e:run')(done));

gulp.task('test-visual', done => gulpSequence(['sandbox:build', 'test:visual:run'])(done));

gulp.task('lint', done => gulpSequence('lint:style', 'lint:script')(done));

gulp.task('watch', ['lint', 'dev'], (done) => {
    multiSync.init();

    // Watch Docs
    gulp.watch([
        'docs/**/*.doc.md',
        'docs/**/*.{njk,nunjucks}',
        'docs/**/*.html',
    ], () => gulpSequence(
        'docs:markup')(() => multiSync.reload()));
    gulp.watch([
        'docs/**/*.scss',
    ], () => gulpSequence(
        'docs:style',
        'lint:style')(() => multiSync.reload()));
    gulp.watch([
        'docs/**/*.es',
    ], () => gulpSequence(
        'docs:script',
        'lint:script')(() => multiSync.reload()));

    // Watch Sandbox
    gulp.watch([
        'cwel/**/*.html',
        'sandbox/**/*.njk',
    ], () => gulpSequence(
        'sandbox:markup')(() => multiSync.reload()));
    gulp.watch([
        'cwel/**/*.scss',
        'sandbox/**/*.scss',
    ], () => gulpSequence(
        'sandbox:style',
        'lint:style')(() => multiSync.reload()));
    gulp.watch([
        'cwel/**/*.es',
        'sandbox/**/*.es',
    ], () => gulpSequence(
        'sandbox:script',
        'lint:script')(() => multiSync.reload()));

    done();
});
