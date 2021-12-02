const express = require('express')
const cors = require('cors');
const app = express();
app.use(cors())
const fs = require('fs');
const port = 3003;

var Manga = require('./manga.js');


var MangaListPage = require('./mangaListPage.js');
var mangaListPage = new MangaListPage()

var mangaList = []

app.use("/source", express.static(__dirname+"/source"));

app.set('views', __dirname);
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    mangaListPage = new MangaListPage()
    res.render('main', { startFunction: mangaListPage.affichPage(mangaList), title:"MangaList" })
})

app.listen(port, '0.0.0.0',() => {
    console.log("Serveur disponible à l'adresse : localhost:"+port)//LOG OK
    fs.readFile('mangaList.json', (err, data) => {
        var list = JSON.parse(data);
        for(var i of list)
        {
            mangaList.push(new Manga(i.name, i.lastBuy))
        }
    });
})