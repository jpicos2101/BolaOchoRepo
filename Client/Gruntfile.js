/// <binding BeforeBuild='Clean/Copy' />
module.exports = function (grunt) {
    grunt.initConfig({
        clean: ["wwwroot/vendors/*"],
        copy: {
            main: {
                files: [
                    {
                        src: "../node_modules/jquery/dist/jquery.min.js",
                        dest: "wwwroot/vendors/jquery/js",
                        expand: true,
                        filter: "isFile",
                        flatten: true
                    },
                    {
                        src: "../node_modules/bootstrap/dist/css/bootstrap.min.css",
                        dest: "wwwroot/vendors/bootstrap/css",
                        expand: true,
                        filter: "isFile",
                        flatten: true
                    },
                    {
                        src: "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js",
                        dest: "wwwroot/vendors/bootstrap/js",
                        expand: true,
                        filter: "isFile",
                        flatten: true
                    },
                    {
                        src: "../node_modules/@popperjs/core/**",
                        dest: "wwwroot/vendors/popper/js",
                        expand: true,
                        filter: "isFile",
                        flatten: true
                    },
                    {
                        src: "../node_modules/holderjs/holder.js",
                        dest: "wwwroot/vendors/holderjs/js",
                        expand: true,
                        filter: "isFile",
                        flatten: true
                    }
                ]
            }
        },
    });

    grunt.registerTask("Clean/Copy", ['clean', 'copy']);
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
};