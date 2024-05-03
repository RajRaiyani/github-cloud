const fs = require('fs');
const path = require('path');
const constants = require('../../config/constants');

exports.list = async () => {
  let list = await fs.promises.readdir(constants.path.storage);

  list = list.map((file) => fs.promises.stat(path.join(constants.path.storage, file)).then((stat) => ({
    name: file,
    size: stat.size,
    createdAt: stat.birthtime,
  })));

  list = await Promise.all(list);
  return list;
};
