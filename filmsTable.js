let search;
let requestURL = "http://127.0.0.1:8080/api/film"
let request = new XMLHttpRequest();
request.open("GET", requestURL);
request.setRequestHeader('Content-type', 'application/json');
request.setRequestHeader('Access-Control-Allow-Origin', '*');
request.responseType = "json"
request.send();

request.onload = function() {
    loadTable();
}

function getData(){
    request.open("GET", requestURL);
    request.setRequestHeader('Content-type', 'application/json');
    request.setRequestHeader('Access-Control-Allow-Origin', '*');
    request.responseType = "json"
    request.send();
}

function loadTable()
{
    let jsonString = request.response;
    let txt = "";
    txt += "<table border='5' table width='400' style='background-color:lightblue'>"
    for (let i = 0; i < 20; i++){
        txt += "<tr><td>" + jsonString[i].title + "</td>";
        txt += "<td>" + jsonString[i].description + "</td>";
        txt += "<td>" + jsonString[i].category + "</td>"
        txt += "<td>" + jsonString[i].price + "</td>"
        txt += "<td>" + jsonString[i].length + "</td>"
        txt += "<td>" + jsonString[i].rating + "</td>"
        txt += "<td>" + jsonString[i].actors + "</td></tr>"
    }
    txt += "</table>"
    console.log(jsonString[0].category);
  //  let jsonString = json.parse(request.stringify);
    let myH1 = document.createElement('h1');
    document.getElementById("table").innerHTML = txt;
}

// horror.onclick = function getCategory(word){
//     search = "horror";
//     getByCategory(search);
// }

function getByCategory(cat){
    if (cat == "all")
    {
        requestURL = "http://127.0.0.1:8080/api/film"
    }
    else{
        requestURL = "http://127.0.0.1:8080/api/film/category/" + cat;
    }
    getData()
    loadTable();
}


