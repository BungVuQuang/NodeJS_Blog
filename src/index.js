const path = require('path');
const express = require('express');
const { engine } = require('express-handlebars');
const morgan = require('morgan');
const app = express();
const port = 3000;
const sass = require('./');

const route = require('./routes');

app.use(express.static(path.join(__dirname, 'public')));//file tĩnh

app.use(express.urlencoded({
    extended: true
}));//sử dụng Middlerware để sử lý dữ liệu của form data gửi lên rồi gán vào obj có tên body

app.use(express.json());// Middlerware sử lý dữ liệu từ các file js gửi lên
//HTTP logger
//Mỗi app.use (phần mềm trung gian (Middleware)) được gọi mỗi khi yêu cầu được gửi đến máy chủ.
app.use(morgan('combined'));
// định nghĩa handlebars bằng engine function
//Template Engine
app.engine('hbs', engine({
    extname: '.hbs'//đổi tên file name đuôi .handlebars thành .hbs
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));//dẫn cái views đế đường dẫn

route(app);//truyền express vào thằng route

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});