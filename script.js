var request = new XMLHttpRequest();

request.open("GET", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")

request.send();

request.onload = function() {

    var data = JSON.parse(request.response);

    for (i = 0; i < data.length; i++) {

        console.log(`Country_name:${data[i].name}
        Flag:${data[i].flag}
    
         latitude:${data[i].latlng[0]} longitude:${data[i].latlng[1]} `)

    }
}