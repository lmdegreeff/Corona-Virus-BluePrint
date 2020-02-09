function getHeavyTampon() {
    /*const heavytampon = document.querySelector("#input-heavy-tampons").value;
    console.log(heavytampon);*/
    localStorage.setItem(Phoebe.heavyTampon, document.querySelector("#input-heavy-tampons").value);
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
