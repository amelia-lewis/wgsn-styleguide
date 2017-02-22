module.exports = function(grunt) {

  grunt.initConfig({
    svgstore: {
      options: {
        // prefix : 'icon-', // This will prefix each ID
        svg: { // will add and overide the the default xmlns="http://www.w3.org/2000/svg" attribute to the resulting SVG
          xmlns: 'http://www.w3.org/2000/svg'
        },
      },
      default : {
        files: {
          'public/assets/icons/wgsn-icons.svg': ['public/assets/icons/**/*.svg'],
        },
      },
    },
  });

  grunt.loadNpmTasks('grunt-svgstore');

  grunt.registerTask('default', ['svgstore']);

};