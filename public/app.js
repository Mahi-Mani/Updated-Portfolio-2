$(document).ready(function(){
    $.ajax("/form", {
        type: "GET"
    }).then(function(data){
        console.log(data);
    })
    // Toggle modal to display website's description and link
    $(document).on("click", ".website", function(event){
        event.preventDefault();
        console.log("Trigger modal button clicked!");
        var id = $(this).data("id");
        // jQuery.noConflict();
        // $("#"+id).modal("toggle");
        $("#"+id).modal();
    })

    // Form to get new website details
    $("#submit-btn").on("click", function(event){
        event.preventDefault();
        console.log("Inside submit button clicked");
        var name = $("#input-name").val().trim();
        var image = $("#input-image").val().trim();
        var desc = $("#input-desc").val().trim();
        var link = $("#input-link").val().trim(); 
        var website = {
            name: name,
            image: image,
            desc: desc,
            link: link
        }

        $.ajax("/new/website", {
            type: "POST",
            data: website
        }).then(function(result){
            console.log("Value is inserted to table");
        })
    })
})


