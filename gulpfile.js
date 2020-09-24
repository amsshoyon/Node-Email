const gulp = require('gulp');
const { src, dest, watch, series, parallel } = require('gulp');
const ext_replace = require('gulp-ext-replace');
const minifyHTML = require('gulp-minify-html');
const inlineCss = require('gulp-inline-css');
const nunjucksRender = require('gulp-nunjucks-render');

const files = {
    njkPath: 'src/**/*.+(html|nunjucks|njk)',
    njkPages: 'src/templates/**/*.+(html|nunjucks|njk)'
}

function ejsTask() {
    return src(files.njkPages)
        .pipe(nunjucksRender({
            path: ['src/']
        }))
        .pipe(ext_replace('.ejs'))
        .pipe(dest('views'))
}

function watchTask() {
    watch([files.njkPath, files.njkPages],
        series(ejsTask)
    );
}

exports.default = series(
    ejsTask,
    watchTask
);

// ====================================

gulp.task('build', function() {
    return src('views/**/*.ejs')
        .pipe(ext_replace('.html'))
        // .pipe(minifyHTML({
        //     comments:true,
        //     spare:false
        // }))
        .pipe(dest('dist'));
});