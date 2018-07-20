const logger = require('parcel-bundler/src/Logger')
const fs = require('fs-extra')
const util = require('./util')

const plugin = function (bundler) {
  bundler.on('bundled', async (bundle) => {
    // get plugin config from main package.json
    const package = await util.getPackageConfig(bundler)
    // merge with default config
    const config = Object.assign({
      source: 'static',
      destination: 'static'
    }, package['parcel-plugin-static'] || {})
    // get source and destination paths
    const paths = util.getPaths(bundler, bundle, config)
    // copy files
    fs.copy(paths.src, paths.dest, err => {
      if (err) {
        logger.error(err)
      }
    })
  })
}

module.exports = plugin
