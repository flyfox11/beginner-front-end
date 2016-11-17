/**
 * Created by os-huzp on 2016/11/10.
 */
/*
 module.exports = function(grunt) {


 grunt.initConfig({
 pkg: grunt.file.readJSON('package.json'),
 uglify: {
 options: {
 banner: '/!*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> *!/\n'
 },
 build: {
 src: 'src/<%= pkg.name %>.js',
 dest: 'build/<%= pkg.name %>.min.js'
 }
 }
 });


 grunt.loadNpmTasks('grunt-contrib-uglify');


 grunt.registerTask('default', ['uglify']);

 };*/
module.exports = function(grunt) {

    var sassStyle = 'expanded';
// 任务配置
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
              options: {
                separator: ';',
              },
              dist: {//第一种方式
                src: ['./1.js', './2.js'],
                dest: './global.js',
              },
            },
            uglify: {
              compressjs: {
                files: {//第三种方式
                  './global.min.js': ['./global.js']
                }
              },
              copy: {//第二种方式
                 files:[
                 {
                  src: ['./1.js', './2.js'],
                  dest: './global.js'
                 },
                 {
                  src: ['./1.html', './2.html'],
                  dest: './global.html'
                 }
                 ]
              }
            },
    });
 // 插件加载
     grunt.loadNpmTasks('grunt-contrib-concat');
      grunt.loadNpmTasks('grunt-contrib-uglify');
 // 任务注册
    grunt.registerTask('concatjs',['concat']);
      grunt.registerTask('compressjs',['concat','uglify']);
    grunt.registerTask('default');
};