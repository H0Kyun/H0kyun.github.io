function openNav() {
   document.getElementById("sidesection").style.left = 0;
   document.getElementById("sidelabel").style.opacity = 0;
}

function closeNav() {
    document.getElementById("sidesection").style.left = '-200px';
    document.getElementById("sidelabel").style.opacity = 1;
}
