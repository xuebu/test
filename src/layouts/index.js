const Components = {};

const req = require.context('.', true, /\.\/[^/]+\/[^/]+\/index\.js$/);

const keys = req.keys();

for(let key of keys) {
  const componentName = key.replace(/^.+\/([^/]+)\/index\.js/, '$1');
  Components[componentName] = req(key).default;
};

export default Components;