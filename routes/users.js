const express = require('express');
const router = express.Router();

const { User } = require('../models');

/* GET users listing. */
router.get('/', async (req, res) => {
  const users = await User.findAll();
  res.status(200).json({
    message: 'success',
    data: users
  });
});

/* GET user. */
router.get('/:id', async (req, res) => {
  const user = await User.findOne({
    where: {
      id: req.params.id
    }
  });
  res.status(200).json({
    message: 'success',
    data: user
  });
});

/* POST user to listing. */
router.post('/', async (req, res) => {
  await User.create(req.body);
  res.status(200).json({
    message: 'success add new user'
  });
});

/* PATCH user to listing. */
router.patch('/update/:id', async (req, res) => {
  await User.update(req.body, {
    where: {
      id: req.params.id
    }
  });
  res.status(200).json({
    message: 'success update data user'
  });
});

/* DELETE user to listing. */
router.delete('/delete/:id', async (req, res) => {
  await User.destroy({
    where: {
      id: req.params.id
    }
  });
  res.status(200).json({
    message: 'success delete user'
  });
});

module.exports = router;
