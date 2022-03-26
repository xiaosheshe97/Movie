var year = document.getElementById('year')
$(function () {
    $('#movie').on('click', function () {
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
                    console.log(res[i].name)
                }
                year.className += 'hide'
            }
        })
    })

    $('#Genres').on('click', function () {
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
                    console.log(res[i].name)
                }
                year.className += 'hide'
            }
        })
    })

    $('#A').on('click', function () {
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
                    console.log(res[i].name)
                }
                year.className += 'hide'
            }
        })
    })

    $('#Actors').on('click', function () {
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
                    console.log(res[i].name)
                }
                year.className += 'hide'
            }
        })
    })

    $('#Year').on('click', function () {
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
                    console.log(res[i].name)
                }
                year.className += 'hide'
            }
        })
    })
})

function renderMovie(movie) {
 
}