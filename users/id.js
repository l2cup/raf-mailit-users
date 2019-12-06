const cuid = require('cuid');

const Id = Object.freeze({
  makeId: cuid,
  validate: cuid.isCuid,
});

module.exports = Id;
