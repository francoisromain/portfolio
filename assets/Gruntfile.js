module.exports = function(grunt) {

	require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

	var jsSrc = [ 
		'src/components/jquery/dist/jquery.min.js',
		'src/components/velocity/velocity.min.js',
		'src/components/imagesloaded/imagesloaded.pkgd.min.js', 
		'src/components/masonry/dist/masonry.pkgd.js', 
		'src/js/jquery.glide.js', 
		'src/js/pace.js',
		'src/js/script.js'
		], 
		jsDist = 'dist/js/lib.js'

	grunt.initConfig({
		copy: {
			dist: {
				files: [
					{
						expand: true, 
						src: ['src/img/*'], 
						dest: 'dist/img/',
						flatten: true,
						filter: 'isFile'
					}, 
					{
						expand: true, 
						src: ['src/fonts/*'], 
						dest: 'dist/fonts/',
						flatten: true,
						filter: 'isFile'
					}, 
					{
						expand: true, 
						src: ['src/js/sessun.js', 'src/js/html5shiv.min.js'], 
						dest: 'dist/js/',
						flatten: true,
						filter: 'isFile'
					}
				]
			}
		}, 
		compass: {
			dist: {
				options: {
					sassDir: 'src/scss',
					specify: 'src/scss/styles.scss',
					cssDir: 'dist',
					environment: 'production', 
					outputStyle: 'compressed', 
					noLineComments: true, 
					force: true
				}
			},
			dev: {                    
				options: {
					sassDir: 'src/scss',
					specify: 'src/scss/styles.scss',
					cssDir: 'dist', 
					noLineComments: true, 
					force: true
				}
			}
		},
		concat: {
			options: {
				separator: '\n'
			},
			dev: { 
				src: jsSrc, 
				dest: jsDist 
			},
			dist: { 
				src: jsSrc, 
				dest: jsDist 
			}
		},
		uglify: {
			options: {
				separator: ';'
			},
			dist: {
				src: jsSrc,
				dest: jsDist
			}
		},
		watch: {
			css: {
				files: 'src/scss/styles.scss',
				tasks: ['styles:dev'], 
				options: {
					livereload: true,
				}
			}
		}
	})

	grunt.registerTask('default', ['dev'])
	grunt.registerTask('dev', ['styles:dev', 'scripts:dev'])
	grunt.registerTask('dist', ['styles:dist', 'scripts:dist', 'medias:dist'])

	grunt.registerTask('scripts:dev', ['concat:dev'])
	grunt.registerTask('scripts:dist', ['uglify:dist'])

	grunt.registerTask('styles:dev', ['compass:dev'])
	grunt.registerTask('styles:dist', ['compass:dist'])
	
	grunt.registerTask('medias:dist', ['copy:dist'])

}
