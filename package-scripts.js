const { series, rimraf, mkdirp } = require('nps-utils');

module.exports = {
  scripts: {
    default: 'nps local',
    local: {
      default: 'nodemon --watch src --exec npx nps local.serve',
      serve: series('npx nps build', 'babel-node src/service.js')
    },
    clean: {
      description: 'Deletes the various generated folders',
      script: series(rimraf('./.express'), rimraf('./.microui')),
    },
    build: {
      description: 'Builds Micro UI for express deployment',
      default: series('npx nps clean', 'npx nps build.express', 'npx nps build.microui'),
      express: series(mkdirp('.express'), `npx babel src --config-file ./babel.express.config.json --out-dir ./.express`),
      microui: series(mkdirp('.microui'), `npx webpack --config ./webpack.config.js`),
    },
  },
};
