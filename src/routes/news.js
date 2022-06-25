const express = require('express');
const router = express.Router();

const newsController = require('../app/controllers/NewsController');

//tuyến đường nó sẽ khớp từ trên xuống
router.use('/:slug', newsController.show);// đường dẫn news/tên bất kỳ
router.use('/', newsController.index); // dấu / để thể hiện cấp cha, FILE này đưa lên trên sẽ luôn match đầu tiên


module.exports = router;