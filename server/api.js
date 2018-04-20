const express = require('express')
const router = express.Router()

router.get('/things', function (req, res) {
  res.json({ foo: 'bar' });
})

module.exports = router
