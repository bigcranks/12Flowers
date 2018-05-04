var gulp = require("gulp");

var babel = require('gulp-babel');
 
gulp.task('default', function(){
    gulp.src('src/js/js/*.js')
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(gulp.dest('dist/js/js'))
});



//图片压缩
var imgMin = require("gulp-imagemin");
gulp.task("imgMin",function(){
	gulp.src("src/images/**/*")
	.pipe(imgMin())
	.pipe(gulp.dest("dist/images"))
})


//js压缩
var jsMin = require("gulp-uglify");
gulp.task("jsMin",function(){
	gulp.src("dist/js/js/*.js")
	.pipe(jsMin())
	.pipe(gulp.dest("dist/js/js"))
})



gulp.task("copy",function(){
	gulp.src("src/html/**/*").pipe(gulp.dest("dist/html"))
})
//编译sass 压缩css
var cssMin = require("gulp-sass-china");

gulp.task("cssMin",function() {
	gulp.src("src/sass/**/*")
	.pipe(cssMin({
		outputStyle:"compressed"
	}))
	.pipe(gulp.dest("src/css"))
})

//监听
gulp.task("addevent",function(){
	gulp.watch("src/sass/**/*",["cssMin"]);
})


//创建服务器
var connect = require("gulp-connect");

gulp.task("connect",function(){
	connect.server({
		root:"src",
		port:8877,
		livereload:true
	})
})

//自动刷新

gulp.task("server-watch",function(){
	gulp.watch(["src/**/*"],function(){
		gulp.src("src/html/**/*").pipe(connect.reload())
	})
})

gulp.task("F5",["connect","server-watch","addevent"])