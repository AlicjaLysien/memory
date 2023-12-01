var cards = ["01.png", "01.png", "02.png", "02.png", "03.png", "03.png",
"04.png", "04.png", "05.png", "05.png", "06.png", "06.png"];  

function shuffle(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}


var c0 = document.getElementById('c0').addEventListener("click", function() { revealCard(0); });
var c1 = document.getElementById('c1').addEventListener("click", function() { revealCard(1); });
var c2 = document.getElementById('c2').addEventListener("click", function() { revealCard(2); });
var c3 = document.getElementById('c3').addEventListener("click", function() { revealCard(3); });

var c4 = document.getElementById('c4').addEventListener("click", function() { revealCard(4); });
var c5 = document.getElementById('c5').addEventListener("click", function() { revealCard(5); });
var c6 = document.getElementById('c6').addEventListener("click", function() { revealCard(6); });
var c7 = document.getElementById('c7').addEventListener("click", function() { revealCard(7); });

var c8 = document.getElementById('c8').addEventListener("click", function() { revealCard(8); });
var c9 = document.getElementById('c9').addEventListener("click", function() { revealCard(9); });
var c10 = document.getElementById('c10').addEventListener("click", function() { revealCard(10); });
var c11 = document.getElementById('c11').addEventListener("click", function() { revealCard(11); });

var oneVisible = false;

var turnCounter = 0;

var visible_nr;

var lock = false;

var pairsLeft = 6;


function revealCard(nr)
{

    var opacityValue = $('#c' + nr).css('opacity');

    if (opacityValue != 0 && lock == false)
    {
        lock = true;
        var picture = "url(img/" + cards[nr] + ")";

        $('#c' + nr).css('background-image', picture);
        $('#c' + nr).addClass('cardA');
        $('#c' + nr).removeClass('card');
       
        if(oneVisible == false) // first card
        {
          oneVisible = true;
          visible_nr = nr;
          lock = false;
        }
        else // second card
        {
           if(cards[visible_nr] == cards[nr])
           {
               // pair
            setTimeout(function() {hide2Cards(nr, visible_nr)}, 750);
               
           }
           else{
                // not a pair
            setTimeout(function() {restore2Cards(nr, visible_nr)}, 1000);
           }
            turnCounter++;
            $('.score').html('Turn counter: ' + turnCounter);
            oneVisible = false;
        }

    }

}


function hide2Cards(nr1, nr2)
{
    $('#c' + nr1).css('opacity', '0');
    $('#c' + nr2).css('opacity', '0');
    pairsLeft--;

    if(pairsLeft == 0)
    {
        $('.board').html('<h1> You win! <br> Done in ' +turnCounter + ' turns.');
    }
    lock = false;
}

function restore2Cards(nr1, nr2)
{
    $('#c' + nr1).css('background-image', 'url(img/00.png)');
        $('#c' + nr1).addClass('card');
        $('#c' + nr1).removeClass('cardA');
        $('#c' + nr2).css('background-image', 'url(img/00.png)');
        $('#c' + nr2).addClass('card');
        $('#c' + nr2).removeClass('cardA');
        lock = false;
}
