const express = require('express');
const router = express.Router();
const { User } = require('../../models');

/* POST login account. */

router.post('/', async (req, res) => {
  const { username, password } =  req.body;
  const account = await User.findOne({
    where: {
      username: username,
      password: password
    }
  });
  if(account == null){
    return res.status(404).json({
      message: 'login failed'
    })
  }
  res.status(200).json({
    message: 'login success'
  })
});


module.exports = router;
