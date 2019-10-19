$(document).ready(function(){
    $.ajax("/portfolio", {
        type: "GET"
    }).then(function(data){
        console.log(data);
    })
})