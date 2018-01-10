const autoprefixer      = require('gulp-autoprefixer');             // Automatically add vendor prefixes using caniuse.com data
const del               = require('del');                           // Delete files and folders
const gulp              = require('gulp');                          // Task automator
const gulpif            = require('gulp-if');                       // Conditionally run a task
const gulpSequence      = require('gulp-sequence');                 // Specify order of tasks
const path              = require('path');                          // Core NodeJS lib
const plumber           = require('gulp-plumber');                  // Prevent errors from killing processes
const process           = require('process');                       // Core NodeJS lib
const rename            = require('gulp-rename');                   // Rename files
const sass              = require('gulp-sass');                     // Compile SCSS into CSS
const sourcemaps        = require('gulp-sourcemaps');               // Generate sourcemaps
const yargs             = require('yargs');                         // Args

const argv = yargs.argv; // parse process.argv with yargs

/* eslint-disable */
const options = require(path.join(process.cwd(), 'gulp', 'lib', 'util', 'options'));
/* eslint-enable */

const sassConfig = {
    precision: 8,
    outputStyle: 'compressed',
};


// @internal
gulp.task('cwel-dist-style', done => gulpSequence([
    'cwel-dist-style-component',
    'cwel-dist-style-pattern',
    'cwel-dist-style-core',
    'cwel-dist-style-vendor',
], 'cwel-dist-style-compile')(done));
// @internal
gulp.task('clean:cwel-dist-style', done => gulpSequence([
    'clean:cwel-dist-style-component',
    'clean:cwel-dist-style-pattern',
    'clean:cwel-dist-style-core',
    'clean:cwel-dist-style-vendor',
    'clean:cwel-dist-style-compile',
])(done));


// @internal
gulp.task('cwel-dist-style-component', () => gulp.src('Cwel/Src/Component/**/*.scss')
.pipe(gulp.dest('Cwel/Dist/Component/')));
// @internal
gulp.task('clean:cwel-dist-style-component', () => del(['Cwel/Dist/Component/**/*.scss']));


// @internal
gulp.task('cwel-dist-style-pattern', () => gulp.src('Cwel/Src/Pattern/**/*.scss')
.pipe(gulp.dest('Cwel/Dist/Pattern/')));
// @internal
gulp.task('clean:cwel-dist-style-pattern', () => del(['Cwel/Dist/Pattern/**/*.scss']));


// @internal
gulp.task('cwel-dist-style-core', () => gulp.src('Cwel/Src/Style/**/*.scss')
.pipe(gulp.dest('Cwel/Dist/Style/')));
// @internal
gulp.task('clean:cwel-dist-style-core', () => del(['Cwel/Dist/Style/**/*.scss']));


// @internal
gulp.task('cwel-dist-style-vendor', () => gulp.src('Cwel/Src/Vendor/**/*.{css,scss}')
.pipe(gulp.dest('Cwel/Dist/Vendor')));
// @internal
gulp.task('clean:cwel-dist-style-vendor', () => del(['Cwel/Dist/Vendor/**/*.{css,scss,css.map}']));


// @internal
gulp.task('cwel-dist-style-compile', () => gulp.src('Cwel/Src/Style/main.scss')
.pipe(gulpif(argv.chill, plumber(options.plumber)))
.pipe(sourcemaps.init())
.pipe(sass(sassConfig))
.pipe(autoprefixer({
    browsers: ['last 30 versions'],
}))
.pipe(rename({
    basename: 'cwel',
}))
.pipe(sourcemaps.write('.'))
.pipe(gulp.dest('Cwel/Dist')));


// @internal
gulp.task('clean:cwel-dist-style-compile', () => del(['Cwel/Dist/cwel.{css,css.map}']));