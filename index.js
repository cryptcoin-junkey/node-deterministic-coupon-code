const seedrandom = require('seedrandom');

module.exports = {
  generate: (seed, idnum, length) => {
    const rng = seedrandom(seed + idnum);
    const code = rng().toString(36);
    if (length < 0) {
      throw new Error("length must be positive");
    }
    if (length > code.length) {
      throw new Error("length max is " + code.length + ".");
    }
    return code.slice(-length);
  }
}
