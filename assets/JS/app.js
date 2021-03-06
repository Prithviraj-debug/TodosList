//check off spcific li when clicked
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

//Click on X to delete ToDo
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove()
    });
    event.stopPropagation
});

$("input[type='text'").keypress(function(event){
    if(event.which === 13){
        //grabbing new todo text from input
        var todoText = $(this).val();
        $(this).val("");
        //create new li and add it to ul
        $("ul").append("<li><span><i class='fas fa-trash'></i></span> " + todoText + "</li>")
    }
});

$("#icon").click(function(){
    $("input[type='text'").fadeToggle(600);
});