$(document).ready(function(){
    
    $(".purpose__item").click(function(event){
        event.preventDefault();
        if ($(".purpose__item.active").length < 15) {
            $(this).toggleClass("active")
        } else if ($(this).hasClass("active")){
            $(this).removeClass("active")
        }
    
    })

});