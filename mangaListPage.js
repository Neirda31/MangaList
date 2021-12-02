class MangaListPage
{
    constructor()
    {
    }

    ///Tableau des tags en mode suppression
    affichPage(mangaList)
    {
        var tab = ""
        tab += "<table>"
        for(var i of mangaList)
        {
            tab+= this.affichManga(i)
        }
        tab += "</table>"
        return tab;
    }
    affichManga(manga)
    {
        var tab = ""
        tab += "<tr>"
        tab += "<td>"+manga.name+"</td>"
        tab += "<td>"+manga.lastBuy+"</td>"
        tab += "</tr>"
        return tab;
    }
    
}

module.exports = MangaListPage;