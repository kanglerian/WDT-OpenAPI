const express = require('express');
const router = express.Router();

const { Blog } = require('../models');

const getPagination = (page, size) => {
  const limit = size ? +size : 3;
  const offset = page ? page * limit : 0;
  return { limit, offset };
};

const getPagingData = (data, page, limit) => {
  const { count: totalItems, rows: blog } = data;
  const currentPage = page ? +page : 0;
  const totalPages = Math.ceil(totalItems / limit);
  return { totalItems, blog, totalPages, currentPage };
};

router.get('/', async (req, res) => {
  const { page, size } = req.query;
  const { limit, offset } = getPagination(page,size);
  await Blog.findAndCountAll({
    limit,
    offset
  })
  .then(data => {
    const response = getPagingData(data, page, limit);
    res.send(response);
  });
});

module.exports = router;
