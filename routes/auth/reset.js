const express = require('express');
const router = express.Router();
const { User } = require('../../models');

/* POST reset account. */

router.post('/', async (req, res) => {
  const { email } =  req.body;
  let account = await User.findOne({
    where: {
      email: email,
    }
  });
  const random = () => {
    let result = '';
    let character = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let charLength = character.length
    for (let i = 0; i < 8; i++) {
        result += character.charAt(Math.floor(Math.random() * charLength));
    }
    return result
  }
  const newPassword = {
    password: random()
  }
  await User.update(newPassword,{
    where: {
        id: account.id
    }
  });
  account = await User.findOne({
    where: {
        id: account.id
    }
  })
  res.status(200).json({
    message: 'reset success',
    data: `Password baru kamu ${account.password}`
  })
});


module.exports = router;
