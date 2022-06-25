
class NewsController {

    //[GET] /news
    index(req, res) {
        res.render('news')
    }
    //[GET] /news/tên bất kỳ
    show(req, res) {//1 trang con liên quan đến news
        res.send('NEWS DETAILS');
    }
}

module.exports = new NewsController;//Tạo ra 1 instance và export ra ngoài