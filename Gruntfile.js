module.exports = function (grunt) {

    grunt.initConfig({

        jshint: {
            settings: {
                src: [
                    'Gruntfile.js',
                    'package.json',
                    'bower.json'
                ],
            },
            everything: {
                src: [
                    'src/**/*.js',
                ],
            },
            options: {
                laxcomma: true, // required for our Angular dependency syntax
                globals: {
                    jQuery: true,
                    console: true,
                    module: true,
                    document: true,
                }
            }
        },

        lint_pattern: {
            everything: {
                options: {
                    rules: [
                        {
                            pattern: /\t/,
                            message: 'Use spaces, not tabs.',
                        },
                    ],
                },
                files: {
                    src: [
                        'src/**/*.js',
                    ],
                },
            },
        },

    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-lint-pattern');

    grunt.registerTask('default', [
        'jshint',
        'lint_pattern',
    ]);

};
