$(document).ready(function(){
    
    $(".purpose__item").click(function(event){
        event.preventDefault();
        $(this).toggleClass("active")
    })

});