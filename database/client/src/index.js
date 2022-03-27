var containner = document.getElementById('containner')
function deleteChild(e) { 
    var child = e.lastElementChild;  
    while (child) { 
        e.removeChild(child); 
        child = e.lastElementChild; 
    } 
} 

$(function () {
    $('#movie').on('click', function () {
        deleteChild(containner)
        $.ajax({
            type: 'GET',
            url: 'http://127.0.0.1:9000/api/Movies',
            success: function (res) {
                if (res.status !== 0) {
                    //   return layui.layer.msg('f！')
                }
                // console.log(res.data)
                // renderMovie(res)
                var arr = new Array();
                arr = res
                console.log(res)
                for (var i = arr.length; i--; i > 0) {
                    var line = document.createElement("div")
                    line.className += "line"

                    var name = document.createElement("div")
                    name.innerHTML += 'Movie: '+ res[i].name 
                    var description = document.createElement("div")

                    description.innerHTML += 'Description: '+ res[i].description
                    line.appendChild(name)
                    line.appendChild(description)
                    containner.appendChild(line)

                }
            }
        })
    })

    $('#Genres').on('click', function () {
        deleteChild(containner)
        $.ajax({
            type: 'GET',
            url: 'http://127.0.0.1:9000/api/Moviegen',
            success: function (res) {
                if (res.status !== 0) {
                    //   return layui.layer.msg('f！')
                }
            
                var arr = new Array();
                arr = res
                console.log(res)
                for (var i = arr.length; i--; i > 0) {
                    var movie = res[i].Movie_name
                    if(!document.getElementById(''+movie)){
                        var line = document.createElement("div")
                        line.className += "line"
                        line.id = "" + movie
                        var name = document.createElement("div")
                        name.innerHTML += 'Movie: '+ movie
                        var genre = document.createElement("div")
                        genre.className +=" genre"
    
                        genre.innerHTML += 'Genre: '+ res[i].Genre_name
                        line.appendChild(name)
                        line.appendChild(genre)
                        containner.appendChild(line)
                    }else{
                        var line = document.getElementById(''+movie)
                        var genre = line.childNodes[1]
    
                        genre.innerHTML +=  ", " + res[i].Genre_name
                    }
            }
        }})
    })

    $('#Movie_and_Actor').on('click', function () {
        deleteChild(containner)
        $.ajax({
            type: 'GET',
            url: 'http://127.0.0.1:9000/api/MovieActor',
            success: function (res) {
                if (res.status !== 0) {
                    //   return layui.layer.msg('f！')
                }
            
                var arr = new Array();
                arr = res
                console.log(res)
                for (var i = arr.length; i--; i > 0) {
                    var movie = res[i].Movie_name
                    if(!document.getElementById(''+movie)){
                        var line = document.createElement("div")
                        line.className += "line"
                        line.id = "" + movie
                        var name = document.createElement("div")
                        name.innerHTML += 'Movie: '+ movie
                        var actor = document.createElement("div")
                        actor.className +=" actor"
    
                        actor.innerHTML += 'Actor: '+ res[i].Actor_name
                        line.appendChild(name)
                        line.appendChild(actor)
                        containner.appendChild(line)
                    }else{
                        var line = document.getElementById(''+movie)
                        var actor = line.childNodes[1]
    
                        actor.innerHTML +=  ", " + res[i].Actor_name
                    }
            }
            }
        })
    })

    $('#Movie_and_Director').on('click', function () {
        deleteChild(containner)

        $.ajax({
            type: 'GET',
            url: 'http://127.0.0.1:9000/api/MovieDirector',
            success: function (res) {
                if (res.status !== 0) {
                    //   return layui.layer.msg('f！')
                }
                var arr = new Array();
                arr = res
                console.log(res)
                for (var i = arr.length; i--; i > 0) {
                    var movie = res[i].Movie_name
                    if(!document.getElementById(''+movie)){
                        var line = document.createElement("div")
                        line.className += "line"
                        line.id = "" + movie
                        var name = document.createElement("div")
                        name.innerHTML += 'Movie: '+ movie
                        var director = document.createElement("div")
                        director.className +=" director"
    
                        director.innerHTML += 'Director: '+ res[i].Director_name
                        line.appendChild(name)
                        line.appendChild(director)
                        containner.appendChild(line)
                    }else{
                        var line = document.getElementById(''+movie)
                        var director = line.childNodes[1]
                        console.log(director)
                        console.log(line.childNodes[1])
    
                        director.innerHTML +=  ", " + res[i].Director_name
                    }
            }
            }
        })
    })


    $('#Actors').on('click', function () {
        deleteChild(containner)
        $.ajax({
            type: 'GET',
            url: 'http://127.0.0.1:9000/api/MovieGroup',
            success: function (res) {
                if (res.status !== 0) {
                    //   return layui.layer.msg('f！')
                }
            
                var arr = new Array();
                arr = res
                console.log(res)
                for (var i = arr.length; i--; i > 0) {
                    var line = document.createElement("div")
                    line.className += "line"

                    var name = document.createElement("div")
                    name.innerHTML += 'Actor: '+ res[i].Actor_name
                    var number = document.createElement("div")

                    number.innerHTML += 'Number of movies: '+ res[i].Movie_Amount
                    line.appendChild(name)
                    line.appendChild(number)
                    containner.appendChild(line)

                }
            }
        })
    })

    $('#Year').on('click', function () {
        deleteChild(containner)

        $.ajax({
            type: 'GET',
            url: 'http://127.0.0.1:9000/api/MovieView',
            success: function (res) {
                if (res.status !== 0) {
                    //   return layui.layer.msg('f！')
                }
            
                var arr = new Array();
                arr = res
                console.log(res)
                for (var i = arr.length; i--; i > 0) {
                    var line = document.createElement("div")
                    line.className += "line"

                    var name = document.createElement("div")
                    name.innerHTML += 'Movie: '+ res[i].name
                    var year = document.createElement("div")

                    year.innerHTML += 'Year: '+ res[i].year
                    line.appendChild(name)
                    line.appendChild(year)
                    containner.appendChild(line)

                }
            }
        })
    })
})

function renderMovie(movie) {
 
}