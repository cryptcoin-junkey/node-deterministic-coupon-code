var seedrandom = require('seedrandom');

module.exports = {
  generate: (seed, idnum, length) => {
    var rng = seedrandom(seed + idnum);
    var code = rng().toString(36);
    if (length > code.length) {
      throw new Error("length max is " + code.length + ".");
    }
    return code.slice(-length);
  }
}
