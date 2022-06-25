const express = require('express');
const router = express.Router();

//dấu .. thể hiện k phải ở file chứa file site.js
const siteController = require('../app/controllers/SiteController');

//tuyến đường nó sẽ khớp từ trên xuống
router.use('/search', siteController.search);// đường dẫn news/tên bất kỳ
router.use('/', siteController.index); // dấu / để thể hiện cấp cha

module.exports = router;