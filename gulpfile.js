

var gulp = require("gulp"),
  babel = require("gulp-babel"),
  webpack = require('gulp-webpack');

gulp.task("shared", function () {
  return gulp.src(["shared/**/*"])
    .pipe(gulp.dest('dist'));
});

gulp.task("transforms", function () {
  return gulp.src(["src/**/*.js"])
    .pipe(babel({ stage: 1 }))
    .pipe(gulp.dest("dist"));
});

gulp.task("webpack", ["transforms"], function () {
  return gulp.src('dist/main.js')
      .pipe(webpack({ output: { filename: "bundle.js" } }))
      .pipe(gulp.dest('dist'));
});

gulp.task("default", ["webpack", "shared"]);
