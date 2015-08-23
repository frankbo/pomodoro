'use strict';

var path = require('path');

module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-express');

    grunt.initConfig({
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
        }

        //scss {}
    });

    grunt.registerTask('default', ['express']);
};
