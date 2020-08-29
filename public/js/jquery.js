$(document).ready(function(){
    var list = []


    $(".purpose__item").click(function(event){
        event.preventDefault();
        if ($(".purpose__item.active").length < 15) {
            $(this).toggleClass("active")
        } else if ($(this).hasClass("active")){
            $(this).removeClass("active")
        }
    
    })

});