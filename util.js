const path = require('path')

module.exports = {
  getPackageConfig(bundler) {
    return bundler.mainBundle.entryAsset.getPackage()
  },
  getPaths(bundler, bundle, config) {
    const rootDirPath = bundler.mainBundle.entryAsset.options.rootDir
    const buildDirPath = path.dirname(bundle.name)
    const src = path.join(rootDirPath, config.source)
    const dest = path.join(buildDirPath, config.destination)
    return {
      rootDirPath,
      buildDirPath,
      src,
      dest
    }
  }
}
