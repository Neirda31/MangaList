const express = require('express')
const cors = require('cors');
const app = express();
app.use(cors())
const fs = require('fs');
const port = 3003;

var MangaList = require('./mangaList.js');


var MangaListPage = require('./mangaListPage.js');
var mangaListPage = new MangaListPage()

var mangaList = new MangaList()

app.use("/source", express.static(__dirname+"/source"));
app.use("/css", express.static(__dirname+"/css"));
app.use("/js", express.static(__dirname+"/js"));

app.set('views', __dirname);
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    mangaListPage = new MangaListPage()
    res.render('main', { startFunction: mangaListPage.affichPage(mangaList.mangaList), title:"MangaList" })
})
app.get('/addManga', function (req, res) {
    mangaList.addManga(req.query.name)
    mangaListPage = new MangaListPage()
    res.send(mangaListPage.affichPage(mangaList.mangaList))
})

app.get('/changeLastBuy', function (req, res) {
    mangaList.changeLastBuy(req.query.id, req.query.value)
    mangaListPage = new MangaListPage()
    res.send(mangaListPage.affichPage(mangaList.mangaList))
})

app.listen(port, '0.0.0.0',() => {
    console.log("Serveur disponible à l'adresse : localhost:"+port)//LOG OK
    fs.readFile('mangaList.json', (err, data) => {
        var list = JSON.parse(data);
        mangaList.createList(list)
    });
})