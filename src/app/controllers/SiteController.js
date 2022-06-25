
//Fle chứa các route của HOME SEARCH
class SiteController {

    //[GET] /
    index(req, res) {
        res.render('home');
    }
    //[GET] /search
    search(req, res) {//1 trang con liên quan đến news
        res.render('search');
    }
}

module.exports = new SiteController;//Tạo ra 1 instance và export ra ngoài