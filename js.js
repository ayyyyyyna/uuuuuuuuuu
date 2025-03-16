function startGame(){
    gameLoop();
}

var count = 0; 
var personVis = false;
var score = 0;


function gameLoop(){
    personVis = ! personVis; //переключение видимости

    // Условие проверки на переключение
    if (personVis ==true){
        var classToset = "character visible";
    }
    else{
        var classToset = "character hidden";
    }

    var gamezone  = document.getElementById("gamezone");

    // Перебор всех блоков
    for (i = 0; i<6; i++){
        gamezone.children[i].className = classToset;
        gamezone.children[i].innerHTML = ""; 
        gamezone.children[i].onclick = function(){score -= 2 ; }; 
    }

    // Выбор случайного числа 
    var randomNum = Math.floor(Math.random()*6) +1;
    
    // Прикрепление слово лишний к рандомному блоку 
    gamezone.children[randomNum-1].innerHTML = ""; 

    // применение внешнего вида лишнему
    gamezone.children[randomNum-1].className = classToset + " naruto";
    gamezone.children[randomNum-1].onclick = function(){score += 1 ; }


    count += 1
    if (count < 12){
        setTimeout(gameLoop, 3000);
    }
    else{
        alert("Игра окончена");
        alert("твой счет" + score)
    }
    
}