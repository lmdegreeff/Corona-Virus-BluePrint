const currentUser = Phoebe; 
function getHeavyTampon() {
    /*const heavytampon = document.querySelector("#input-heavy-tampons").value;
    console.log(heavytampon);*/
    localStorage.setItem(Phoebe.heavyTampon, document.querySelector("#input-heavy-tampons").value);
}

let phoebe = {
    password: "Polar_seltzer",
    donor: "true",
    heavyTampons: "1000",
    regularTampons: "0",
    latitude: "32",
    longitude: "32"
};