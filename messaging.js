var currentNeed;
var x;
var y = 1;

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
                availableList.push(user.name);
            }
        }
        if (currentNeed===('pad'))
        {
            if(user.pads==true)
            {
                /*console.log("success");
                console.log("${user}");*/
                availableList.push(user.name);
                
            }
        }
        console.log(availableList);
    
}
return availableList; 
};

/*function sortList(availableList)
{
    lat=localStorage.getItem('latitude');
    console.log(lat); 
    long=localStorage.getItem('longitude');
    console.log(long);
    var newList=[];
    for (var user of availableList)
    {
        dist=Math.sqrt((user.latitude - lat)^2 + (user.longitude - long)^2)
        if (dist<=0.01)
        {
            newList.push[user,dist];
        }
        newList.push([user,dist]);
    }
    for (var user of newList)
    {
        console.log(user[1]);
    }
        const len = newList.length;
        for (let i = 1; i < len; i++) {
            
          let el = newList[i];
          let j;
          console.log(newList[i][1]);
      
          for (j = i - 1; j >= 0 && newList[j][1] > el[1]; j--) {
            console.log(newList[j][1]);
            newList[j + 1] = newList[j];
          }
          newList[j + 1] = el;
        }
        console.log(newList);
        return newList;
      };*/

function print(availableList) {
    y = 1; 
    document.getElementById('1').innerHTML = "hi.";
    for (var user of availableList) {
        document.getElementById(y).innerHTML = user;
        y++;
    }
}

var phoebe = {
    name: "Phoebe",
    password: "Polar_seltzer",
    tampons: true,
    pads:false,
    latitude: 32.00,
    longitude: 32.00
};
var emily = {
    name: "Emily",
    password: "photo",
    tampons: false,
    pads: false,
    latitude: 62.00,
    longitude: -22.00
};
var emma = {
    name: "Emma", 
    password: "people",
    tampons: false,
    pads: false,
    latitude: 34.00,
    longitude: 57.00
};
var tali= {
    name: "Tali", 
    password: "foundation",
    tampons: true, 
    pads: true,
    latitude: 89.00,
    longitude: 20.00
};
var natalie= {
    name: "Natalie", 
    password: "grocery",
    tampons: false, 
    pads: true,
    latitude: -23.00,
    longitude: 45.00
};
var victoria= {
    name: "Victoria", 
    password: "disk",
    tampons: true, 
    pads: false, 
    latitude: -34.00,
    longitude: -12.00
};
var tom = {
    name: "Tom",
    password: "poetry",
    tampons: true, 
    pads: true,
    latitude: 09.00,
    longitude: -12.00
};
var ellie= {
    name: "Ellie", 
    password: "writing",
    tampons: true, 
    pads: true, 
    latitude: -34.00,
    longitude: 23.00
};
var tammy= {
    name: "Tammy", 
    password: "debt",
    tampons: false, 
    pads: true, 
    latitude: 63.00,
    longitude: -39.00
};
var tillie= {
    name: "Tillie", 
    password: "stuff",
    tampons: true, 
    pads: false, 
    latitude: -24.00,
    longitude: -92.00
};
var shannon= {
    name: "Shannon", 
    password: "dad",
    tampons: true,
    pads: false, 
    latitude: -45.00,
    longitude: 94.00
};
var matilda= {
    name: "Matilda", 
    password: "attention",
    tampons: false, 
    pads: false, 
    latitude: -94.00,
    longitude: -27.00
};
var james= {
    name: "James", 
    password: "robert",
    tampons: false, 
    pads: true, 
    latitude: -27.00,
    longitude: -43.00
};
var toby= {
    name: "Toby",
    password: "health",
    tampons: false, 
    pads: true, 
    latitude: 93.00,
    longitude: 48.00
};
var angelica= {
    name: "Angelica", 
    password: "reccomendation",
    tampons: true, 
    pads: true, 
    latitude: -36.00,
    longitude: 67.00
};
var users=[phoebe,emily,emma,tali,natalie,victoria,tom,ellie,tammy,tillie,shannon,matilda,james,toby,angelica];

