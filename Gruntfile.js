module.exports = function(grunt) {
    'use strict';

    grunt.initConfig({

        clean: ['build/'],

        jshint: {
            options: {
                jshintrc: '.jshintrc',
                ignores: ['src/js/vendor/**']
            },
            all: {
                files: {
                    src: ['src/js/**/*.js', 'test/specs/**/*.js', 'Gruntfile.js']
                }
            }
        },

        copy: {
            html: {
                files: [{
                    expand: true, cwd: 'src/', src: ['index.html'], dest: 'build/'
                }]
            },
            vendorjs: {
                files: [{
                    expand: true,
                    cwd: 'src/js/',
                    src: ['vendor/jquery/dist/jquery.min.js'],
                    dest: 'build/js/'
                }]
            }
        },

        concat: {
            js: {
                options: {
                    sourceMap: true
                },
                src: ['src/js/*.js'],
                dest: 'build/js/main.js'
            }
        },

        connect: {
                server: {
                    options: {
                        port: 8888,
                        base: '.'
                    }
                }
        },
        mocha: {
            all: {
                options: {
                    urls: ['http://localhost:8888/test/zooTest.html']
                }
            }
        },

        watch: {
            js: {
                files: ['src/js/*.js'],
                tasks: ['jshint', 'test', 'concat']
            },
            html: {
                files: ['src/index.html'],
                tasks: ['copy:html']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-mocha');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('test', ['connect', 'mocha']);
    grunt.registerTask('build', ['clean', 'jshint', 'test', 'concat', 'copy']);
    grunt.registerTask('default', ['build']);


};
