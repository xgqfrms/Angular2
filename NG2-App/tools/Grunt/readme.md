# Grunt

[Getting started](http://gruntjs.com/getting-started)

```sh
>
$ npm install -g grunt-cli

# run grunt
$ grunt
$ grunt --help

# plugins & options
$ npm install grunt --save-dev
$ npm install grunt-contrib-jshint --save-dev
```


## Gruntfile (Gruntfile.js / Gruntfile.coffee)

```js
module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'src/<%= pkg.name %>.js',
                dest: 'build/<%= pkg.name %>.min.js'
            }
        }
    });
    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    // Default task(s).
    grunt.registerTask('default', ['uglify']);
};
```




[Sample Gruntfile](http://gruntjs.com/sample-gruntfile)

```js
module.exports = function(grunt) {
    grunt.initConfig({
    jshint: {
        files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
        options: {
        globals: {
            jQuery: true
        }
        }
    },
    watch: {
        files: ['<%= jshint.files %>'],
        tasks: ['jshint']
    }
    });
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['jshint']);
};
```

## Configuring tasks

[Grunt Configuration](http://gruntjs.com/configuring-tasks)

```js
grunt.initConfig({
    jshint: {
        foo: {
            src: ['src/aa.js', 'src/aaa.js']
        },
    },
    concat: {
        bar: {
            src: ['src/bb.js', 'src/bbb.js'],
            dest: 'dest/b.js',
        },
    },
});
```

## Globbing patterns

> While this isn't a comprehensive tutorial on globbing patterns, know that in a filepath:

\* matches any number of characters, but not /

? matches a single character, but not /

\*\* matches any number of characters, including /, as long as it's the only thing in a path part

{} allows for a comma-separated list of "or" expressions

! at the beginning of a pattern will negate the match

## The typical folder structure

src(app)/
dist(build)/
test/



## Project Scaffolding

> Grunt-init is a scaffolding tool used to automate project creation.

[Grunt-init](http://gruntjs.com/project-scaffolding)

```sh
>
$ npm install -g grunt-init
```

## Creating plugins ? SMG