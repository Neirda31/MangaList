const fs = require('fs');

class Manga
{
    constructor(name, lastBuy)
    {
        this.name = name
        this.lastBuy = lastBuy;
    }
    setAuthor(author)
    {
        for (var type of author) {
            this.list.push(new Tag("Author", type.id, type.text, type.type))
        }
    }
}

module.exports = Manga;
