const components = require.context('./components', true, /-test\.js$/);
components.keys().forEach(components);

const utils = require.context('./utils', true, /-test\.js$/);
utils.keys().forEach(utils);
