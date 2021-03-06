import {
  Preset,
  CleanJavascripts,
  Mocha,
  Prepublish,
  PublishBuild,
  RollupUmd,
  EsLint,
  Aggregate,
  series
} from 'gulp-pipeline'
import gulp from 'gulp'
import pkg from './package.json'
import moment from 'moment'

const preset = Preset.baseline()

const rollupConfig = {
  options: {
    moduleName: 'keyJs',
    banner: `/*!
  * ${pkg.name} v${pkg.version} (${pkg.homepage})
  * Copyright ${moment().format("YYYY")} ${pkg.author}
  * Licensed under ${pkg.license}
  */`
  }
}

const js = new Aggregate(gulp, 'js',
  series(gulp,
    new CleanJavascripts(gulp, preset),
    new EsLint(gulp, preset),
    new Mocha(gulp, preset),
    new RollupUmd(gulp, preset, rollupConfig, {
      options: {
        dest: 'key.umd.js',
      }
    })
  )
)

const defaultRecipes = new Aggregate(gulp, 'default', js)

// publish
new Aggregate(gulp, 'publish',
  series(gulp,
    new Prepublish(gulp, preset),   // asserts committed
    defaultRecipes,
    new PublishBuild(gulp, preset)
  )
)
