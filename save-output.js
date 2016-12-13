const fs = require('fs');
const path = require('path');
const R = require('ramda');

module.exports = R.curry((outputPath, tree) => {
  fs.writeFileSync(
    path.resolve(outputPath), JSON.stringify(tree, null, 2), { encoding: 'utf8' }
  );
});
