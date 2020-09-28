const gulp = require('gulp');
const { src, dest, watch, series, parallel } = require('gulp');
const ext_replace = require('gulp-ext-replace');
const minifyHTML = require('gulp-htmlmin');
const inlineCss = require('gulp-inline-css');
const nunjucksRender = require('gulp-nunjucks-render');
const clean = require('gulp-clean');

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

function build() {
    return src('views/**/*.ejs')
        .pipe(ext_replace('.html'))
        .pipe(inlineCss({
            applyLinkTags: false,
            removeLinkTags: false
        }))
        .pipe(minifyHTML({ 
            collapseWhitespace: true,
            caseSensitive: true,
            minifyCSS: true,
            removeComments: true
        }))
        .pipe(dest('dist'));
}

function cleanDist() {
    return src('./dist', { read: false, allowEmpty: true})
    .pipe(clean());
}

function cleanViews() {
    return src('./views', { read: false, allowEmpty: true })
    .pipe(clean());
}

exports.default = series(
    ejsTask,
    watchTask
);

exports.build = series(
    cleanDist,
    cleanViews,
    ejsTask,
    build
);

exports.clean = series(
    cleanDist,
    cleanViews
);

// ====================================
