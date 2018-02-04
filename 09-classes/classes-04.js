class MovieCollection extends Array {
    constructor(name, ...items) {
        super(...items)
        this.name = name;
    }
    
    add(movie) {
        this.push(movie);
    }

    topRated(limit = 2) {
        return this.sort(  (a ,b) => (a.stars > b.stars ? -1 :1) ).slice(0,limit)
    }
}

const movies = new MovieCollection("Kyels favorite movie",
{name:"Star wars", stars:5},
{name:"Iron Man",stars:2},
{name:"Captain America", stars:1}

)

movies.add({name:"panic",stars:22})
console.log(movies.topRated())