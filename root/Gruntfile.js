/*global module:false */
module.exports = function(grunt) {

    grunt.initConfig({

        copy: {
            all: {
                options: {
                    flatten: true
                },
                files: {
                    "app/assets/": ["{%= src_dir %}/**/*.*"]
                }
            }
        },
        exec: {
            tsserve: {
                command: "cd app && tsapp serve",
                stdout: true
            },
            tspush: {
                command: "cd app && tsapp push {%= ts_target_space %}_public",
                stdout: true
            }
        }
    });

    grunt.registerTask("ts-deploy", "Deploy the application to TiddlySpace", function () {

        grunt.task.run("exec:tspush");
    });

    grunt.registerTask("ts-serve", "Host the application locally via tsapp", function () {

        grunt.task.run("exec:tsserve");
    });

    grunt.loadNpmTasks("grunt-exec");
    grunt.loadNpmTasks("grunt-contrib-copy");

};