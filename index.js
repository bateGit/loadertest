const getOptions = require("loader-utils");

module.exports = function(source) {
  const options = getOptions.getOptions(this);

  source = source.replace(/\[name\]/g, options.name);

  return `export default ${JSON.stringify(source)}`;
};
