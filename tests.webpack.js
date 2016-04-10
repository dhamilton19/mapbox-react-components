const items = require.context('./src', true, /-test\.js$/);
items.keys().forEach(items);
