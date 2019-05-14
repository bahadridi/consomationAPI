$.getJSON('https://jsonp.afeld.me/?url=https%3A%2F%2Fapi.myglamapp.pl%2Fapi%2Fcategories%3Flanguage%3DEN', function(data) {




    for (let i = 0; i < data.data.length; i++) {

        document.getElementById('dataher').innerHTML += ' <div class="carousel-item col-md-4"> <div class="card"> <img class="card-img-top img-fluid" src=http://' + data.data[i].imagePath + ' alt="Card image cap"> <div class="card-body"> <h4 class="card-title">' + data.data[i].label + '</h4> <p class="card-text">' + data.data[i].description + '</p> <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> </div> </div> </div>'
    }
});

// function logResults(json) {
//     console.log(json);
// }

// $.ajax({
//     url: "",
//     dataType: "jsonp",
//     jsonpCallback: "logResults"
// });