var n = 0;
var k = 0;
var sum = 0;
var sum1 = 0;
var arr = [];
var arr1 = [];
var purchse = 0;
var counter = 0;
var strC = 'coins_';
var strD = 'data_';
var strV = 'value_';
var strP = 'buy_';
var now = new Date();

let dinosaur = document.getElementsByClassName("dinosaur");
let block = document.getElementsByClassName('problem');
let score = document.getElementsByClassName('score');
let gamePlace = document.getElementsByClassName('gamePlace');
let scoreCoins = document.getElementsByClassName('scoreCoins');
let records = document.getElementsByClassName('flex');
var show = document.getElementsByClassName('show');
let afterSafeCoins = document.getElementsByClassName('afterSafeCoins');
var here = document.getElementsByClassName('here');
let isAllow = document.getElementsByClassName('isAllow');
var cages = document.getElementsByClassName('cages');
var backet = document.getElementsByClassName('backet');

function jump(event) {
    if (event.keyCode == 32) {
        var random = getRandomIntInclusive(0, 1000);
        if (dinosaur.classList != 'jumpdDin') {
            dinosaur[0].classList.add('jumpdDin');

        }
        setTimeout(() => {
            dinosaur[0].classList.remove('jumpdDin');
        }, 500);

        let checkXY = setInterval(() => {
            let top = parseInt(window.getComputedStyle(dinosaur[0]).getPropertyValue('top'));
            let left = parseInt(window.getComputedStyle(block[0]).getPropertyValue('left'));
            if (left < 60 && left > 0 && top >= 210) {
                alert('you lose');

                dinosaur[0].style.animation = 'none';
                block[0].style.animation = 'none';

                localStorage.setItem(strV + localStorage.length, n);
                var data = now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds() + ' ' + now.getDate() + '-' + now.getMonth();
                localStorage.setItem(strD + localStorage.length, data);

                localStorage.setItem(strC + localStorage.length, parseInt(scoreCoins[0].innerHTML));

                location.reload();
            } else {
                score[0].innerHTML = Math.ceil(n += 0.5);
            }
        }, 10);



        if (parseInt(score[0].innerHTML) >= 1000) {
            block[0].style.animationDuration = '0.9s';
        }
        if (parseInt(score[0].innerHTML) >= 5000) {
            block[0].style.animationDuration = '0.8s';
        }
        if (parseInt(score[0].innerHTML) >= 7000) {
            block[0].style.animationDuration = '0.7s';
        }
        if (parseInt(score[0].innerHTML) >= 9000) {
            block[0].style.animationDuration = '0.63s';
        }
        if (parseInt(score[0].innerHTML) >= 15000) {
            block[0].style.animationDuration = '0.6s';
        }

    }
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

addEventListener('keydown', jump);

document.addEventListener('DOMContentLoaded', () => {
    score[0].innerHTML = 'нажмите пробел';
});
document.addEventListener('DOMContentLoaded', checkCoins);

function checkCoins() {
    for (var u = 0; u < localStorage.length; u++) {
        var key1 = localStorage.key(u);

        for (var l in localStorage) {
            if (l == (strC + u)) {
                if (localStorage[l] == 'NaN') {
                    sum;
                    here[0].innerHTML = sum;
                } else {
                    sum += parseInt(localStorage[l]);
                    here[0].innerHTML = sum;
                }
            }
        }
    }
}


function createCoins() {
    var coin = document.createElement('div');
    coin.className = 'coin';
    gamePlace[0].appendChild(coin);
    var coins = document.getElementsByClassName('coin');

    setTimeout(() => {
        for (var i = 0; i < coins.length; i++) {
            gamePlace[0].removeChild(coins[i]);
        }
    }, 700);

    let checkXY = setInterval(() => {
        for (var q = 0; q < coins.length; q++) {
            var leftC = parseInt(window.getComputedStyle(coins[q]).getPropertyValue('left'));
            var leftD = parseInt(window.getComputedStyle(dinosaur[0]).getPropertyValue('left'));

            var topC = parseInt(window.getComputedStyle(coins[q]).getPropertyValue('bottom'));
            var topD = parseInt(window.getComputedStyle(dinosaur[0]).getPropertyValue('top'));


            if ((leftC <= 70 && topD < 130) || (leftC <= 60 && topD < 130) || (leftC <= 75 && topD < 130)) {
                k++;
                scoreCoins[0].innerHTML = k;
                gamePlace[0].removeChild(coins[q]);
            }
        }
    }, 10);

}

setInterval(createCoins, getRandomIntInclusive(1000, 5000));


show[0].addEventListener('click', showTableScore);

function showTableScore() {
    counter++;
    for (let j = 0; j < localStorage.length; j++) {

        var key2 = localStorage.key(j);

        for (var c in localStorage) {
            if (c == (strV + j)) {
                var p = document.createElement("p");
                p.className = 'record';
                p.innerHTML = localStorage[c];
                records[0].appendChild(p);
            }
        }

        for (var m in localStorage) {
            if (m == (strD + j)) {
                var p1 = document.createElement("p");
                p1.className = 'data';
                p1.innerHTML = localStorage[m];
                records[0].appendChild(p1);
            }
        }
    }
    if (show[0].className === 'show') {
        show[0].className += ' res';
        show[0].innerHTML = 'Закрыть резульаты';
    } else {
        show[0].className = 'show';
        show[0].innerHTML = 'Открыть резульаты';
        while (records[0].firstChild) {
            records[0].removeChild(records[0].firstChild);
        }
    }
}

var flag = 0;
var sum3 = 0;

function checkPusrchase() {
    for (var u = 0; u < localStorage.length; u++) {
        var key1 = localStorage.key(u);

        for (var l in localStorage) {
            if (l == (strC + u)) {
                if (localStorage[l] == 'NaN') {
                    sum1;
                    delete localStorage[l];
                } else {
                    sum1 += parseInt(localStorage[l]);
                }
            }
        }
    }

    for (var i = 0; i < isAllow.length; i++) {
        if (sum1 >= parseInt(isAllow[i].innerHTML)) {
            isAllow[i].style.color = 'green';
        } else {
            isAllow[i].style.color = 'red';
        }
    }


    let x = 0;
    for (var i = 0; i < cages.length; i++) {
        cages[i].addEventListener('click', buy);
    }

    function buy(event) {
        if (this.getAttribute('class') == 'cages') {
            purchse++;
            let isCon = confirm("Вы подтверждаете покупку");
            var child = event.target.parentNode.getElementsByClassName('isAllow')[0].innerHTML;
            if (isCon == true && sum1 >= parseInt(child)) {
                alert('вы купили');


                var dif = sum1 - parseInt(child);


                for (var y = 0; y < localStorage.length; y++) {
                    for (var key3 in localStorage) {
                        if (key3 == (strC + y)) {
                            if (localStorage[key3] != 'NaN') {
                                if (sum3 !== parseInt(child)) {
                                    sum3 += parseInt(localStorage[key3]);
                                    console.log(sum3);
                                    delete localStorage[key3];
                                }
                                if (here[0].innerHTML == '0') {
                                    delete localStorage[key3];
                                    console.log(localStorage[key3]);

                                }
                            }
                        }
                    }

                }

                localStorage.setItem(strP + localStorage.length, this.getAttribute('id'));

                location.reload();
            } else {
                alert('you can`t buy');
            }
        }
    }

}

checkPusrchase();


function Backet() {
    for (var u = 0; u < localStorage.length; u++) {
        var key2 = localStorage.key(u);

        for (var p in localStorage) {
            if (p == (strP + u)) {
                for (var y = 0; y < cages.length; y++) {
                    if (cages[y].getAttribute('id') == localStorage[p]) {
                        backet[0].appendChild(cages[y]);
                    }
                }

            }
        }
    }


    for (var o = 0; o < backet[0].children.length; o++) {
        backet[0].children[o].className = 'changeCage';
        var text = backet[0].children[o].getElementsByClassName('cost');
        for (var p = 0; p < text.length; p++) {
            text[p].innerHTML = 'куплено';
        }
    }

    var ch = document.getElementsByClassName('changeCage');

    for (var g = 0; g < ch.length; g++) {
        ch[g].addEventListener('click', exchange);
        ch[g].addEventListener('mousemove', Yellow);
    }

    function exchange() {
        let ex = this.getElementsByClassName('Photo_Cages')[0].src;
        let srcD = dinosaur[0].src;
        this.getElementsByClassName('Photo_Cages')[0].src = srcD;
        dinosaur[0].src = ex;
    }

    function Yellow() {

    }
}

Backet();
