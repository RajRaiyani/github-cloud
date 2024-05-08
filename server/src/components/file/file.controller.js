const service = require('./file.service');

exports.list = async (req, res, next) => {
  try {
    const list = await service.list();
    res.json(list);
  } catch (error) {
    next(error);
  }
};
