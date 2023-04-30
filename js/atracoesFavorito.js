window.onload = function (){
    
     document.getElementById("favorite").onclick = 
        function changeState(){
            var link = document.getElementById("favorite").src;
            if(link.indexOf("imagens/favorite.png") != -1){
                document.getElementById("favorite").src = "imagens/favoritefull.png";
            }
            else if (link.indexOf("imagens/favoritefull.png") != -1){
                document.getElementById("favorite").src = "imagens/favorite.png";
            }
        }
}

let touchstartX = 0 //pos do rato quando clica no ecrã (eixo dos x)
let touchendX = 0 // pos do rato quando larga o botão (eixo dos x)
    
function checkDirection() {
  if (touchendX-50 > touchstartX) window.location.assign('atracoes.html');
}

document.addEventListener('mousedown', e => {
  touchstartX = e.pageX
})

document.addEventListener('mouseup', e => {
  touchendX = e.pageX
  checkDirection()
})