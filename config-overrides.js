const { alias, configPaths } = require("react-app-rewire-alias");
const aliasMap = configPaths("./tsconfig.paths.json")

module.exports = alias(aliasMap)

// module.exports = function override(config, env) {
//   alias({
//     "@store": "src/store",
//     "@shared": "src/shared",
//     "@components": "src/components",
//     // '@shared': 'src/shared'
//   })(config);

//   return config;
// };
