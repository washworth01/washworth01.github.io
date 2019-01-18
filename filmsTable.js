let search;
let requestURL = "http://127.0.0.1:8080/api/film"
let request = new XMLHttpRequest();
request.open("GET", requestURL);
request.setRequestHeader('Content-type', 'application/json');
request.setRequestHeader('Access-Control-Allow-Origin', '*');
request.responseType = "json"
request.send();
let jsonString = request.response;
let txt = "";
let page = 1;

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
	let i = 0;
    jsonString = request.response;
	if (page == 1){
		i = 0;
	}
	else{
		i = page*20-20;
	}
    txt = "";
	document.getElementById("filmList").innerHTML = txt;
	txt += "<tr><td>Title</td><td>Description</td><td>Catergory</td><td>Price</td><td>Length</td><td>Rating</td><td>Actors</td></tr>"
    for (i = i; i < page*20; i++){
        txt += "<tr><td>" + jsonString[i].title + "</td>"
        txt += "<td>" + jsonString[i].description + "</td>"
        txt += "<td>" + jsonString[i].category + "</td>"
        txt += "<td>" + jsonString[i].price + "</td>"
        txt += "<td>" + jsonString[i].length + "</td>"
        txt += "<td>" + jsonString[i].rating + "</td>"
        txt += "<td>" + jsonString[i].actors + "</td></tr>"
    }
    console.log(jsonString[0].category);
  //  let jsonString = json.parse(request.stringify);
    let myH1 = document.createElement('h1');
    document.getElementById("filmList").innerHTML = txt;
}

// horror.onclick = function getCategory(word){
//     search = "horror";
//     getByCategory(search);
// }

function getByCategory(cat){
    if (cat == "all")
    {
        requestURL = "http://127.0.0.1:8080/api/film";
    }
    else{
        requestURL = "http://127.0.0.1:8080/api/film/category/" + cat;
    }
	page = 1;
    getData();
    loadTable();
}

function findByTitle(){
    let input = document.getElementById("search").value;
	input = input.toUpperCase();
	txt = "";
	let counter = 0;
    for (let j = 0; j < jsonString.length; j++){
        if (jsonString[j].title.includes(input)){
            txt += "<tr><td>" + jsonString[j].title + "</td>";
            txt += "<td>" + jsonString[j].description + "</td>";
            txt += "<td>" + jsonString[j].category + "</td>";
            txt += "<td>" + jsonString[j].price + "</td>";
            txt += "<td>" + jsonString[j].length + "</td>";
            txt += "<td>" + jsonString[j].rating + "</td>";
            txt += "<td>" + jsonString[j].actors + "</td></tr>";
			counter = counter*1+1
        }
	}
	if (counter == 0){
		txt = "Sorry! We couldn't find what you were looking for."
	}
        document.getElementById("filmList").innerHTML = txt;  
}

function nextPage(){
    page = page*1+1;
	console.log(page);
    getData();
}

function previousPage(){
    page = page*1-1;
	console.log(page);
    getData();
}


