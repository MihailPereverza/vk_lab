// const gulp = require('gulp')
import gulp from 'gulp'
import babel from 'gulp-babel'
import uglify from 'gulp-uglify'
import {deleteSync} from 'del'
import cssMinify from 'gulp-css-minify'
import path from 'path'
import less from 'gulp-less'
import concat from 'gulp-concat'
import browserify from 'browserify'
import babelify from 'babelify'
import htmlmin from 'gulp-html-minifier'
import fs from 'fs'
import source from 'vinyl-source-stream'
import minify from 'gulp-minify'
import buffer from 'vinyl-buffer'
// const babel = require('gulp-babel')


export const js = (e) => {
    browserify('src/front/public/js/users.js')
        .transform('babelify', {presets: ['@babel/preset-env']})
        .bundle()
        .pipe(source('users.js'))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(gulp.dest('gulpdist/public/js'))

    browserify('src/front/public/js/index.js')
        .transform('babelify', {presets: ['@babel/preset-env']})
        .bundle()
        .pipe(source('index.js'))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(gulp.dest('gulpdist/public/js'))
    e()
}


export const bab = (e) => {
    gulp.src('src/front/public/js/**/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        // .pipe(uglify())
        .pipe(concat('main.js'))
        .pipe(gulp.dest('gulpdist/public/js'))
    e()
}


export const clear = (e) => {
    deleteSync('gulpdist/**');
    e()
}


export const my_less = (e) => {
    gulp.src('src/front/public/less/*.less')
        .pipe(less())
        .pipe(cssMinify())
        .pipe(gulp.dest('gulpdist/public/css'))
    e()
}


export const html = (e) => {
    gulp.src('src/front/pages/*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('gulpdist/pages'))
    e()
}


export const build = gulp.series(clear, my_less, html, js)
