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



