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
        tab += "<tr>"
        tab += "<td><input type='text' id='NewManga'></td>"
        tab += "<td><input type='button' value='Ajouter' onClick='addManga()'></td>"
        tab += "</tr>"
        tab += "</table>"
        return tab;
    }
    affichManga(manga)
    {
        var tab = ""
        tab += "<tr>"
        tab += "<td>"+manga.name+"</td>"
        tab += "<td>"+manga.lastBuy+"</td>"
        tab += "<td><input type='button' value='-' onClick='changeLastBuy("+manga.id+",-1)'></td>"
        tab += "<td><input type='button' value='+' onClick='changeLastBuy("+manga.id+",1)'></td>"
        tab += "</tr>"
        return tab;
    }
    
}

module.exports = MangaListPage;