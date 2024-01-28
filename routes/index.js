const express = require('express');
const router = express.Router();

//test Lint if it catches not used variables
// const testLint = "notLintness";
// console.log(testLint);

router.use('/contacts', require('./contacts'))

module.exports = router;