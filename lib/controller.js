$(document).ready(function(){
    
    //add listeners on menu buttons
    $('.howitworksbtn').on("click", function(event, ui){
        $('.howitworksbtn').buttonMarkup({theme: 'g'});
        $('.ordernowbtn').buttonMarkup({theme: 'a'});
    });
    
    $('.ordernowbtn').on("click", function(event, ui){
        $('.howitworksbtn').buttonMarkup({theme: 'a'});
        $('.ordernowbtn').buttonMarkup({theme: 'g'});
    });
});