const db = require('./db')

exports.getAllMovies = (req, res) => {
    const sqlStr = `
    SELECT name, description
    FROM Movie
    `
    db.query(sqlStr, (err, results) => {
        if (err) return res.send({ status: 1, message: err.message })
        res.send(results)
    })
}

exports.getMoviesNameAndGenre = (req, res) => {
    const sqlStr = `
    SELECT Movie.name AS Movie_name, Genre.name AS Genre_name
    FROM Movie
    JOIN Movie_Genre ON Movie.id = Movie_Genre.movie_id 
    JOIN Genre ON  Movie_Genre.genre_id = Genre.id`
    db.query(sqlStr, (err, results) => {
        if (err) return res.send({ status: 1, message: err.message })
        res.send(results)
    })
}

exports.getMoviesNameAndActor = (req, res) => {
    const sqlStr = `
    SELECT Movie.name AS Movie_name, Actor.name AS Actor_name,
    FROM Movie
    JOIN Movie_Actor ON Movie.id = Movie_Actor.movie_id 
    JOIN Actor ON  Movie_Actor.actor_id  = Actor.id`
    db.query(sqlStr, (err, results) => {
        if (err) return res.send({ status: 1, message: err.message })
        res.send(results)
    })
}

exports.getGroup = (req, res) => {
    const sqlStr = `
    SELECT Actor.name AS Actor_name, COUNT(Actor.id) AS Movie_Amount
    FROM Actor
    JOIN Movie_Actor ON Actor.id = Movie_Actor.actor_id 
    GROUP BY Actor.name 
    `
    db.query(sqlStr, (err, results) => {
        if (err) return res.send({ status: 1, message: err.message })
        res.send(results)
    })
}

exports.getView = (req, res) => {
    

    const sqlStr = `
    CREATE VIEW Movie_Dir AS
    SELECT Movie.name, Movie.id
    FROM Movie
    WHERE Movie.id < "3"
    `
    db.query(sqlStr, (err, results) => {
        if (err) return res.send({ status: 1, message: "1" })
    })
    const sql2 = ` Select * From Movie_Dir
    `
    db.query(sql2, (err, results) => {
        if (err) return res.send({ status: 1, message: err.message })
        res.send(results)
    })
    const sql =`DROP VIEW Movie_Dir`
    db.query(sql, (err, results) => {
        if (err) return res.send({ status: 1, message: "3" })
    })
}