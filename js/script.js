//click event in jquery is click unlike js where it is onclick

$(document).ready(function(){
    $('h1').click(function(){
        $('#main').css({
            color:'red',
            fontSize: 20
        });
    });    
});


$(window).on("load", function(){});