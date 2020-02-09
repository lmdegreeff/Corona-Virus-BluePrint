var currentNeed;
var x;
var y = 1;
var i; 

function storeTampon() {
localStorage.setItem('need', 'tampon');
}

function storePad() {
    localStorage.setItem('need', 'pad');
}

function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      x.innerHTML = "Geolocation is not supported by this browser.";
    }
  }
function showPosition(position) {
    localStorage.setItem('latitude',position.coords.latitude);
    localStorage.setItem('longitude',position.coords.longitude);
    /*x.innerHTML = "Latitude: " + position.coords.latitude +
    "<br>Longitude: " + position.coords.longitude;*/
  
  }
function match()
{
    lat=localStorage.getItem('latitude');
    long=localStorage.getItem('longitude');
    var availableList=[];
    var currentNeed = localStorage.getItem('need'); 
    console.log(localStorage.getItem('need'));
    console.log(currentNeed);
    for (var user of users)
    {
        console.log(user.name);
        if(currentNeed===('tampon'))
        {
            if(user.tampons==true)
            {
                availableList.push([user.name,user.number,Math.trunc(Math.sqrt((Math.abs(user.latitude - lat)^2) + (user.longitude - long)^2)*69)+" miles away"]);
            }
        }
        if (currentNeed===('pad'))
        {
            if(user.pads==true)
            {
                availableList.push([user.name,user.number,Math.trunc(Math.sqrt((Math.abs(user.latitude - lat)^2) + (user.longitude - long)^2)*69)+" miles away"]);
            }
        }
        console.log(availableList);
    
}
return availableList; 
};
/*
function sortList(availableList)
{
    lat=localStorage.getItem('latitude');
    long=localStorage.getItem('longitude');
    var newList=[];
    for (var user of availableList)
    {
        dist=Math.random();
        /*Math.sqrt((Math.abs(user.latitude - lat)^2) + (user.longitude - long)^2);
        console.log(dist);

            console.log("ERROR");
            console.log(dist);
            console.log(user.latitude);
            console.log(user.longitude);
            console.log(lat);
            console.log(long);
        newList.push([user.name,user.number,dist]);
    }
    console.log(newList);
     
  for (let i = 1; i < newList.length; i++) {
    let j = i - 1;
    let tmp = newList[i][2];
    while (j >= 0 && newList[2] > tmp) {
      newList[j + 1] = newList[j];
      j--;
    }
    newList[j+1] = tmp;
  }
  return newList;
}
*/ 
function print(availableList) {
    y = 1; 
    document.getElementById('1').innerHTML = "Couldn't find anyone, sorry.      :(";
        for (i = 0; i < availableList.length; i++) {
           console.log(i);
           document.getElementById(y).innerHTML = availableList[i][0] + " | " + availableList[i][1] + " | Distance: " + availableList[i][2];
        y++;
    }
}

var phoebe = {
    name: "Phoebe",
    number: "202-555-0193",
    password: "Polar_seltzer",
    tampons: true,
    pads:false,
    latitude: 32.00,
    longitude: 32.00
};
var emily = {
    name: "Emily",
    number: "202-555-0161",
    password: "photo",
    tampons: false,
    pads: false,
    latitude: 62.00,
    longitude: -22.00
};
var emma = {
    name: "Emma", 
    number: "202-555-0150",
    password: "people",
    tampons: false,
    pads: false,
    latitude: 34.00,
    longitude: 57.00
};
var tali= {
    name: "Tali", 
    number: "202-555-0150",
    password: "foundation",
    tampons: true, 
    pads: true,
    latitude: 89.00,
    longitude: 20.00
};
var natalie= {
    name: "Natalie",
    number: "202-555-0148", 
    password: "grocery",
    tampons: false, 
    pads: true,
    latitude: -23.00,
    longitude: 45.00
};
var victoria= {
    name: "Victoria", 
    number: "202-555-0157",
    password: "disk",
    tampons: true, 
    pads: false, 
    latitude: -34.00,
    longitude: -12.00
};
var tom = {
    name: "Tom",
    number: "202-555-0174",
    password: "poetry",
    tampons: true, 
    pads: true,
    latitude: 09.00,
    longitude: -12.00
};
var ellie= {
    name: "Ellie", 
    number: "978-555-1413",
    password: "writing",
    tampons: true, 
    pads: true, 
    latitude: -34.00,
    longitude: 23.00
};
var tammy= {
    name: "Tammy", 
    number: "519-555-1805",
    password: "debt",
    tampons: false, 
    pads: true, 
    latitude: 63.00,
    longitude: -39.00
};
var tillie= {
    name: "Tillie", 
    number: "958-555-1234",
    password: "stuff",
    tampons: true, 
    pads: false, 
    latitude: -24.00,
    longitude: -92.00
};
var shannon= {
    name: "Shannon", 
    number: "123-555-1856",
    password: "dad",
    tampons: true,
    pads: false, 
    latitude: -45.00,
    longitude: 94.00
};
var matilda= {
    name: "Matilda", 
    number: "148-555-1372",
    password: "attention",
    tampons: false, 
    pads: false, 
    latitude: -94.00,
    longitude: -27.00
};
var james= {
    name: "James", 
    number: "532-555-9172",
    password: "robert",
    tampons: false, 
    pads: true, 
    latitude: -27.00,
    longitude: -43.00
};
var toby= {
    name: "Toby",
    number: "984-555-1928",
    password: "health",
    tampons: false, 
    pads: true, 
    latitude: 93.00,
    longitude: 48.00
};
var angelica= {
    name: "Angelica", 
    number: "134-555-1237",
    password: "reccomendation",
    tampons: true, 
    pads: true, 
    latitude: -36.00,
    longitude: 67.00
};
var users=[phoebe,emily,emma,tali,natalie,victoria,tom,ellie,tammy,tillie,shannon,matilda,james,toby,angelica];

