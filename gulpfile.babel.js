import {
  Preset,
  CleanJavascripts,
  Mocha,
  Prepublish,
  PublishBuild,
  RollupUmd,
  RollupIife,
  EsLint,
  Aggregate,
  Uglify,
  series,
  parallel
} from 'gulp-pipeline'
import gulp from 'gulp'
import pkg from './package.json'
import moment from 'moment'

const preset = Preset.baseline()

const rollupConfig = {
  options: {
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
    parallel(gulp,
      // umd (non-bundled)
      new RollupUmd(gulp, preset, rollupConfig, {
        options: {
          dest: 'key.umd.js',
          moduleName: 'key'
        }
      }),
      // self executing (fully bundled)
      new RollupIife(gulp, preset, rollupConfig, {
        options: {
          dest: 'key.iife.js',
          moduleName: 'key'
        }
      })
    )
  )
)

const defaultRecipes = new Aggregate(gulp, 'default', js)

const all = new Aggregate(gulp, 'all',
  series(gulp,
    defaultRecipes,
    new Uglify(gulp, preset, {
      debug: true,
      task: {name: 'iife:uglify'},
      source: {
        glob: 'key.iife.js'
      }
    })
  )
)

// publish
new Aggregate(gulp, 'publish',
  series(gulp,
    new Prepublish(gulp, preset),   // asserts committed
    all,
    new PublishBuild(gulp, preset)
  )
)
