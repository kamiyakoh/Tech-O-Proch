/*
  Copyright (C) 2014 Yusuke Suzuki <utatane.tea@gmail.com>

  Redistribution and use in source and binary forms, with or without
  modification, are permitted provided that the following conditions are met:

    * Redistributions of source code must retain the above copyright
      notice, this list of conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above copyright
      notice, this list of conditions and the following disclaimer in the
      documentation and/or other materials provided with the distribution.

  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS 'AS IS'
  AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
  IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
  ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
  DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
  (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
  LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
  ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
  (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
  THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

//----------------------------------------------------------------------
//  モード
//----------------------------------------------------------------------
"use strict";

//----------------------------------------------------------------------
//  モジュール読み込み
//----------------------------------------------------------------------
const gulp = require("gulp");
const { src, dest, watch, series, parallel } = require("gulp");

const plumber = require("gulp-plumber");
const notify = require('gulp-notify');
const sassGlob = require("gulp-sass-glob-use-forward");
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require("gulp-autoprefixer");

//----------------------------------------------------------------------
//  関数定義
//----------------------------------------------------------------------
function compile(done) {
  src("./src/scss/**/*.scss")
    .pipe(plumber({ errorHandler: notify.onError("Error: <%= error.message %>") }))                   // watch中にエラーが発生してもwatchが止まらないようにする
    .pipe(sassGlob())                  // glob機能を使って@useや@forwardを省略する
    .pipe(sass())                      // sassのコンパイルをする
    .pipe(autoprefixer())              // ベンダープレフィックスを自動付与する
    .pipe(dest("./dist/css"));

  done();
}

//----------------------------------------------------------------------
//  watch関数定義
//----------------------------------------------------------------------
function watchTask(done) {
  // watch( "監視したいファイル(またはフォルダ)を指定" , 処理 );
    watch("./src/scss/**" , series(compile));
  }

//----------------------------------------------------------------------
//  タスク定義
//----------------------------------------------------------------------
exports.compile = series(compile);
exports.watch = series(watchTask); //npx gulp watch

/************************************************************************/
/*  END OF FILE                                                         */
/************************************************************************/