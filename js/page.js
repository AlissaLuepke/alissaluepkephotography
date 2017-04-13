var curImg = 1;
var timestamp = 0;

$(document).ready(function () {

 $('.top').UItoTop();
    
    $(".nav a").on("click", function () {
        $(".nav").find(".active").removeClass("active");
        $(this).parent().addClass("active");
    });

});

var timer = setInterval(changePic, 5000);
var timer2 = setInterval(updateBalken, 1);

function changePic() {
    var newLeft = (curImg % 4 * 100);
    console.log("triggered");
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
        url:"/php/contact.php",
        data:$('#contact_formula').serialize()
    }).done(function(msg){
        alert("Data Saved"+msg);
    });
    
});