window.addEventListener("load", main);

function searchForGroup(){
    console.log("searching for a group");
    //remove selector
    document.querySelector("input").removeEventListener("click", searchForGroup);
    //change message
    document.getElementById("topPhrase").innerText = "Keep your watches";
    document.querySelector("input").style.opacity = 0;
    document.getElementById("lowPhrase").innerText = "together";
    //start animation
    let goodToGo = 0;
    while (goodToGo === 0){
        goodToGo = startFindingGroupAnimation();
    }
}

function startFindingGroupAnimation() {
    document.querySelector("body").style.backgroundImage = "url(imagens/group1.png)";
    let id = 2;
    let time = 1000;
    for (let i = 0; i < 5; i++){
        if (id < 2){
            setTimeout(function(){document.querySelector("body").style.backgroundImage = ("url(imagens/group1.png)")}, time);
        } else {
            setTimeout(function(){document.querySelector("body").style.backgroundImage = ("url(imagens/group2.png)")}, time);   
        }
        id = (id + 1 > 2) ? 1 : 2;
        time += 1000;
    }
    //After searching, display friends
    setTimeout(function(){displayFoundFriends()}, time - 200);
}

function displayFoundFriends() {
    console.log("displaying friends");
    let people = [new groupFriend("John", [0,128,255]),
            new groupFriend("Katie", [255,0,0]),
            new groupFriend("Gabriel", [0,255,0]),
            new groupFriend("Theodore", [255,125,0]),
            new groupFriend("Rick", [0,128,255]),
            new groupFriend("Sam", [255,128,0]),
            new groupFriend("Mary", [100,255,128]),
            new groupFriend("Lily", [125,125,250])
        
        ];


    //changing content of the watch
    document.getElementById("groupMenuContainer").innerHTML = "";
    document.querySelector("body").style.backgroundImage = "url()";

    let header = document.createElement("p");
    header.classList.add("groupMember");
    header.id = "header";
    header.append(document.createTextNode("O meu Grupo"));
    document.getElementById("groupMenuContainer").append(header);

    //insert group members
    people.forEach(function(person){
        let p = document.createElement("p");
        let img = document.createElement("img");
        img.src = "imagens/" + person.name + ".png";
        img.alt = person.name;
        p.classList.add("groupMember");
        p.append(img);
        p.append(document.createTextNode(person.name));
        document.getElementById("groupMenuContainer").append(p);
    });

    //groupFound, no need to go through previous process
    sessionStorage.setItem('hasGroup', 'true');
}

class groupFriend {
    constructor(name, rgb=[0,0,0]){
        this.name = name;
        this.color = rgb;
        this.nick = name;
    }
}

function main() {
    document.querySelector("input").addEventListener("click", searchForGroup);
    if (sessionStorage.getItem("hasGroup") === 'true'){
        displayFoundFriends(); //display friends
    }
}


/** funções para voltar para trás */

let touchstartX = 0 //pos do rato quando clica no ecrã (eixo dos x)
let touchendX = 0 // pos do rato quando larga o botão (eixo dos x)
    
function checkDirection() {
  if (touchendX-70 > touchstartX) window.location.assign('Ecra_Principal.html');
}

document.addEventListener('mousedown', e => {
  touchstartX = e.pageX
})

document.addEventListener('mouseup', e => {
  touchendX = e.pageX
  checkDirection()
})
