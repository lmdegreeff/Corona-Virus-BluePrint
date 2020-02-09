const currentUser = Phoebe; 
function getHeavyTampon() {
    /*const heavytampon = document.querySelector("#input-heavy-tampons").value;
    console.log(heavytampon);*/
    localStorage.setItem(Phoebe.heavyTampon, document.querySelector("#input-heavy-tampons").value);
    Phoebe.heavyTampon
}

var Phoebe = {
    password: "Polar_seltzer",
    heavyTampon: "1000",
    regularTampon: "0"
};