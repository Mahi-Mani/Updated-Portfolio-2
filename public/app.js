$(document).ready(function(){
    // $.ajax("/portfolio", {
    //     type: "GET"
    // }).then(function(data){
    //     console.log(data);
    // })
    $(document).on("click", ".btn", function(event){
        event.preventDefault();
        console.log("Trigger modal button clicked!");
        // jQuery.noConflict();
        $("#train").modal("show");
        // $("#train").modal();
    })
})