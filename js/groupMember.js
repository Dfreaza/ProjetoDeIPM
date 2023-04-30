window.addEventListener("load", main);

function main () {
    let p = JSON.parse(sessionStorage.getItem("activeGroupMember"));
    let img = document.getElementById("friendImg");
    document.getElementById("name").innerText = p.name;
    img.src = "imagens/" + p.name + ".png";
    document.getElementById("colorSquare").style.backgroundColor = p.color;
}








/** funções para voltar para trás */

let touchstartX = 0 //pos do rato quando clica no ecrã (eixo dos x)
let touchendX = 0 // pos do rato quando larga o botão (eixo dos x)
    
function checkDirection() {
  if (touchendX-70 > touchstartX) window.location.assign('Ecra_grupo.html');
}

document.addEventListener('mousedown', e => {
  touchstartX = e.pageX
})

document.addEventListener('mouseup', e => {
  touchendX = e.pageX
  checkDirection()
})

