const { task, parallel } = require('gulp')
const scss = require('./gulp/tasks/scss')
const svg = require('./gulp/tasks/svg')

/* Tache par défault */
task('default', parallel(scss.tasks, svg.tasks))