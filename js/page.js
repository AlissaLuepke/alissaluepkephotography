var curImg = 1;
var timestamp = 0;

var timer = setInterval(changePic, 5000);
var timer2 = setInterval(updateBalken, 1);

function changePic() {
    var newLeft = (curImg % 4 * 100);
       $('.header-gallery').animate({
        right: newLeft + '%'
    }, 900);
    curImg++;
    timestamp = 0;
}

function updateBalken() {
    timestamp++;
    $('.balken-gallery').animate({
        width: timestamp / (50 / 4) + "%"
    }, 0);
}


$('#formula_send').click(function(){
    $.ajax({
        method:"POST",
        url:"php/contact.php",
        data:$('#contact_formula').serialize()
    }).success(function(msg){
        $('#success').slideDown();
        setTimeout(function() { $('#success').slideUp(); }, 5000);
    }).fail(function(msg){
        $('#fail').slideDown();
        setTimeout(function() { $('#fail').slideUp(); }, 5000);
    });
    
});