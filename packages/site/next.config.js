const withSass = require("@zeit/next-sass");
const withTM = require("next-transpile-modules")(["lib"]);

// module.exports = withSass(withTM()); // BREAKS
module.exports = withTM(); // WORKS
