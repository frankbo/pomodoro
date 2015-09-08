'use strict';

var path = require('path');

module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-express');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    //require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        // Watches files for changes and runs tasks based on the changed files
        watch: {
            sass: {
                files: 'app/style/scss/**/*.{scss,sass}',
                tasks: ['sass']
            }
        },

        express: {
            options: {
                port: 3000,
                hostname: '*'
            },
            livereload: {
                options: {
                    server: path.resolve(__dirname, 'server/server.js'),
                    serverreload: true,
                    base: 'server'
                }
            }
        },

        // Compiles Sass to CSS and generates necessary files if requested
        sass: {
            options: {
                sourceMap: false,
                includePaths: ['app/bower_components']
            },
            server: {
                options: {
                    sourceMap: false
                },
                files: [{
                    expand: true,
                    cwd: 'app/style/scss',
                    src: ['**/*.scss'],
                    dest: 'app/style/css',
                    ext: '.css'
                }]
            }
        }
    });

    grunt.registerTask('serve', ['express']);
};
