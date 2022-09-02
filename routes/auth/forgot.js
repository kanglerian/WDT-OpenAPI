const express = require('express');
const router = express.Router();
const { User } = require('../../models');

/* POST forgot password account. */

router.post('/', async (req, res) => {
  const { email } =  req.body;
  let account = await User.findOne({
    where: {
      email: email,
    }
  });
  res.status(200).json({
    message: 'forgot password success',
    data: `Password kamu ${account.password}`
  })
});


module.exports = router;
