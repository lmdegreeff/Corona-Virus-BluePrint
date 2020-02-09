const currentUser = Phoebe;
function getHeavyTampon() {
    /*const heavytampon = document.querySelector("#input-heavy-tampons").value;
    console.log(heavytampon);*/
    localStorage.setItem(Phoebe.heavyTampon, document.querySelector("#input-heavy-tampons").value);
}
function storeTampon() {
    localStorage.setItem('need', 'tampon')
}

function storePad() {
    localStorage.setItem('need','pad')
}



function match(productType)
{
    var availableList={}
    var currentNeed=localStorage.get('need');
    for (user in users)
    {
        if(currentNeed.equals('tampon'))
        {
            if(user.tampons==true)
            {
                availableList.push(user);

            }
        }
        else if (currentNeed.equals('pad'))
        {
            if(user.pads==true)
            {
                availableList.push(user);
            }
        }
    return availableList;
}
    function sortList(availableList)
{
    lat=localStorage.get('latitude');
    long=localStorage.get('longitude');
    var newList={};
    for (var user in availableList)
    {
        dist=Math.sqrt((user.latitude - lat)^2 + (user.longitude - long)^2)
        if (dist<=0.01)
        {
            newList.push(user,dist);
        }
    }
        const len = newList.length;
        for (let i = 0; i < len; i++) {
          let el = newList[i];
          let j;
      
          for (j = i - 1; j >= 0 && newList[j] > el; j--) {
            newList[j + 1] = newList[j];
          }
          newList[j + 1] = el;
        }
        return newList;
      };

}
var users={phoebe,rebecca,chelsea, eliza, angelica}
let phoebe = {
    password: "Polar_seltzer",
    donor: true,
    tampons=true,
    pads=false,
    latitude: "32",
    longitude: "32"
};

let rebecca = {
    password: "Polar_seltzer",
    donor: "true",
    heavyTampons: "1000",
    regularTampons: "0",
    latitude: "32",
    longitude: "32"
};

let chelsea = {
    password: "Polar_seltzer",
    donor: "true",
    heavyTampons: "1000",
    regularTampons: "0",
    latitude: "32",
    longitude: "32"
};

let eliza = {
    password: "Polar_seltzer",
    donor: "true",
    heavyTampons: "1000",
    regularTampons: "0",
    latitude: "32",
    longitude: "32"
};
let angelica = {
    password: "Polar_seltzer",
    donor: "true",
    heavyTampons: "1000",
    regularTampons: "0",
    latitude: "32",
    longitude: "32"
};
}
