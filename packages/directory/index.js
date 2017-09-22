
'use strict'

const glob = require('glob')
const path = require('path')

module.exports = (dir) => ({
  all: async () => {
    return glob.sync(dir)
      .map(relative => path.resolve(relative))
      .map(absolute => [ path.parse(absolute).name, require(absolute) ])
      .map(([ name, content ]) => ({ name, content }))
  }
})
