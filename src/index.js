const path = require('path');
const express = require('express');
const { engine } = require('express-handlebars');
const morgan = require('morgan');
const app = express();
const port = 3000;
const sass = require('./');


app.use(express.static(path.join(__dirname, 'public')));//file tĩnh
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

app.get('/', (req, res) => {
    res.render('home');//render cái layout của home.handlerbars vào phần body của main.handlerbars
});

app.get('/news', (req, res) => {// /news là localhost:3000/news
    res.render('news');//render cái layout của news.handlerbars vào phần body của main.handlerbars
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});