/*
 * grunt-init-tsapp
 *
 * Copyright (c) 2013 Ben Paddock, contributors
 * Licensed under the MIT license.
 */
exports.description = 'Create a TiddlySpace application';

exports.notes = 'This template will only generate scaffolding if the directory you are running this from is empty';

exports.after = 'Now install project dependencies by running _npm install_.  When that has completed run ' +
    '_grunt --help_ to see the list of available project tasks';

// Warn on any files and folders already present in the project
exports.warnOn = '*';

exports.template = function(grunt, init, done) {

    init.process({}, [

        init.prompt('name'),
        init.prompt('description'),
        init.prompt('version'),
        init.prompt('author_name'),
        {
            name: 'ts_username',
            message: 'TiddlySpace username',
            default: 'please fill me in'
        },
        {
            name: 'ts_target_space',
            message: 'TiddlySpace target space',
            default: 'please fill me in'
        },
        {
            name: 'src_dir',
            message: 'Where will your source directory be located?',
            default: 'src'
        },
        {
            name: 'test_dir',
            message: 'Where will your test directory be located?',
            default: 'test'
        }

    ], function(err, props) {

        init.copyAndProcess(init.filesToCopy(props), props);

        done();
    });

};