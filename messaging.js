function match(productType)
{
    var availableList={};
    var currentNeed=localStorage.get('need');
    for (var user in users)
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
            newList.push[user,dist];
        }
    }
        const len = newList.length;
        for (let i = 0; i < len; i++) {
          let el = newList[i];
          let j;
      
          for (j = i - 1; j >= 0 && newList[j][1] > el[1]; j--) {
            newList[j + 1] = newList[j];
          }
          newList[j + 1] = el;
        }
        return newList;
      };

}
var users=[phoebe,emily,emma,tali,natalie,victoria,tom,ellie,tammy,tillie,shannon,matilda,james,toby,angelica];
var phoebe = {
    password: "Polar_seltzer",
    heavyTampons: true,
    regularTampons: false,
    lightTampons: true,
    heavyPad: true,
    regularPad: false,
    lightPad: false,
    latitude: 32.00,
    longitude: 32.00
};
var emily = {
    password: "photo",
    heavyTampons: false,
    regularTampons: false,
    lightTampons: true,
    heavyPad: false,
    regularPad: true,
    lightPad: false,
    latitude: 62.00,
    longitude: -22.00
};
var emma = {
    password: "people",
    heavyTampons: false,
    regularTampons: false,
    lightTampons: true,
    heavyPad: false,
    regularPad: false,
    lightPad: false,
    latitude: 34.00,
    longitude: 57.00
};
var tali= {
    password: "foundation",
    heavyTampons: false,
    regularTampons: true,
    lightTampons: true,
    heavyPad: false,
    regularPad: false,
    lightPad: true,
    latitude: 89.00,
    longitude: 20.00
};
var natalie= {
    password: "grocery",
    heavyTampons: false,
    regularTampons: true,
    lightTampons: false,
    heavyPad: false,
    regularPad: false,
    lightPad: true,
    latitude: -23.00,
    longitude: 45.00
};
var victoria= {
    password: "disk",
    heavyTampons: false,
    regularTampons: false,
    lightTampons: false,
    heavyPad: true,
    regularPad: true,
    lightPad: false,
    latitude: -34.00,
    longitude: -12.00
};
var tom = {
    password: "poetry",
    heavyTampons: false,
    regularTampons: false,
    lightTampons: false,
    heavyPad: true,
    regularPad: true,
    lightPad: true,
    latitude: 09.00,
    longitude: -12.00
};
var ellie= {
    password: "writing",
    heavyTampons: false,
    regularTampons: true,
    lightTampons: true,
    heavyPad: true,
    regularPad: true,
    lightPad: false,
    latitude: -34.00,
    longitude: 23.00
};
var tammy= {
    password: "debt",
    heavyTampons: false,
    regularTampons: false,
    lightTampons: true,
    heavyPad: true,
    regularPad: false,
    lightPad: false,
    latitude: 63.00,
    longitude: -39.00
};
var tillie= {
    password: "stuff",
    heavyTampons: true,
    regularTampons: true,
    lightTampons: true,
    heavyPad: false,
    regularPad: false,
    lightPad: true,
    latitude: -24.00,
    longitude: -92.00
};
var shannon= {
    password: "dad",
    heavyTampons: false,
    regularTampons: true,
    lightTampons: false,
    heavyPad: false,
    regularPad: false,
    lightPad: true,
    latitude: -45.00,
    longitude: 94.00
};
var matilda= {
    password: "attention",
    heavyTampons: false,
    regularTampons: true,
    lightTampons: true,
    heavyPad: false,
    regularPad: true,
    lightPad: false,
    latitude: -94.00,
    longitude: -27.00
};
var james= {
    password: "robert",
    heavyTampons: true,
    regularTampons: true,
    lightTampons: false,
    heavyPad: false,
    regularPad: true,
    lightPad: false,
    latitude: -27.00,
    longitude: -43.00
};
var toby= {
    password: "health",
    heavyTampons: true,
    regularTampons: false,
    lightTampons: true,
    heavyPad: false,
    regularPad: false,
    lightPad: false,
    latitude: 93.00,
    longitude: 48.00
};
var angelica= {
    password: "reccomendation",
    heavyTampons: true,
    regularTampons: false,
    lightTampons: true,
    heavyPad: true,
    regularPad: false,
    lightPad: false,
    latitude: -36.00,
    longitude: 67.00
};
