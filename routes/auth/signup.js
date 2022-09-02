const express = require('express');
const router = express.Router();

const { User } = require('../../models');

/* POST SignUp account. */
router.post('/', async (req, res) => {
  const username = await User.findOne({
    where: {
      username: req.body.username
    }
  });
  const email = await User.findOne({
    where: {
      email: req.body.email
    }
  });
  if(username == null && email == null){
    await User.create(req.body);
    return res.status(200).json({
      message: 'Account created.'
    })
  }
  res.status(401).json({
    message: 'Create account failed, account has already created. Please check username and email.'
  });
});

module.exports = router;
