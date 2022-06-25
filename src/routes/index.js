const newsRouter = require('./news');
const siteRouter = require('./site');
function route(app) {

    app.use('/news', newsRouter);// /news là cấp con của newsRouter
    app.use('/', siteRouter);//để xuống dưới nếu k nó sẽ match đầu tiên
    //Action ----> Dispatcher ----> Function handler
    // app.get('/', (req, res) => {
    //     res.render('home');//render cái layout của home.handlerbars vào phần body của main.handlerbars
    // });

    //req là chứa những thông tin mà phía ứng dụng client yêu cầu lên server
    //res là biến giúp tuỳ chọn cấu hình trả về client như thế nào vd: status
    // app.get('/news', (req, res) => {// /news là localhost:3000/news
    //     res.render('news');//render cái layout của news.handlerbars vào phần body của main.handlerbars
    // });
    //lấy dữ liệu qua URL thì req.query.
    // app.get('/search', (req, res) => {
    //     res.render('search');
    // });

    // app.post('/search', (req, res) => {
    //     console.log(req.body);//lấy dữ liêu qua form data
    //     res.send('');
    // });
}

module.exports = route;
