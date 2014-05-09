module.exports = (grunt) ->
	grunt.initConfig
		"gh-pages":
			options:
				base: "build"

			src: "**/*"

		copy:

			images:
				files: [
					expand: true
					cwd: "src/"
					src: "images/**/*"
					dest: "build/"
				]

			html:
				files: [
					expand: true
					cwd: "src/"
					src: "**/*.html"
					dest: "build/"
				]


		coffee:
			compileWithMaps:
				options:
					sourceMap: true
					join: true

				files:
					'build/javascripts/app.js': 'src/coffee/**/*.coffee'

		sass:
			main:
				options:
					compass: true
					require: "susy"
					loadPath: "components/bootstrap-sass/vendor/assets/stylesheets/"

				files:
					"build/stylesheets/styles.css": "src/stylesheets/style.scss"

		watch:
			options:
				livereload: true

			html:
				files: ["src/**/*.html"]
				tasks: ["copy:html"]
				options: {}


			#
			sass:
				files: ["src/stylesheets/**/*.scss"]
				tasks: ["sass"]
				options: {}


			#
			coffee:
				files: ["src/coffee/**/*.coffee"]
				tasks: ["coffee"]
				options: {}


	#
	grunt.loadNpmTasks "grunt-gh-pages"
	grunt.loadNpmTasks "grunt-contrib-copy"
	grunt.loadNpmTasks "grunt-contrib-watch"
	grunt.loadNpmTasks "grunt-contrib-sass"
	grunt.loadNpmTasks 'grunt-contrib-coffee'


	grunt.registerTask "default", [
		"build:main"
		"watch"
	]

	grunt.registerTask "build:main", [
		"coffee"
		"sass"
		"copy:html"
		"copy:images"
	]

	grunt.registerTask "publish", [
		"build:main"
		"gh-pages"
	]

	return
