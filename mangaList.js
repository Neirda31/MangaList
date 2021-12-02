const fs = require('fs');

class Manga
{
    constructor(id, name, lastBuy)
    {
        this.id = id
        this.name = name
        this.lastBuy = parseInt(lastBuy);
    }
}

class MangaList
{
    constructor()
    {
        this.mangaList = []
    }
    createList(list)
    {
        for(var i of list)
        {
            this.mangaList.push(new Manga(i.id ,i.name, i.lastBuy))
        }
    }
    getMangaPosById(id)
    {
        for(var i in this.mangaList)
        {
            if(this.mangaList[i].id == id)
            {
                return i
            }
        }
    }
    addManga(name)
    {
        this.mangaList.push(new Manga(this.mangaList.length,name, 1))
        this.setJSON()
    
    }
    changeLastBuy(id,value)
    {
        var mangaPos = this.getMangaPosById(id)
        this.mangaList[mangaPos].lastBuy += parseInt(value)
        this.setJSON()
    }

    setJSON()
    {
        let datavaleur = JSON.stringify(this.mangaList);
        fs.writeFileSync("mangaList.json", datavaleur);
    }
}

module.exports = MangaList;
