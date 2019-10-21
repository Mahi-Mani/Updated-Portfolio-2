$(document).ready(function () {
    $.ajax("/form", {
        type: "GET"
    }).then(function (data) {
        console.log(data);
    })
    // Toggle modal to display website's description and link
    $(document).on("click", ".website", function (event) {
        event.preventDefault();
        console.log("Trigger modal button clicked!");
        var id = $(this).data("id");
        $("#" + id).modal();
    })

    // Form to get new website details
    $("#submit-btn").on("click", function (event) {
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

        // POST a new portfolio
        $.ajax("/new/website", {
            type: "POST",
            data: website
        }).then(function (result) {
            console.log("Value is inserted to table");
            $("#input-name").val("");
            $("#input-image").val("");
            $("#input-desc").val("");
            $("#input-link").val("");

            getPortfolioPage();
        })
    })

    // Function to get portfolio page
    function getPortfolioPage() {
        $.ajax("/portfolio", {
            type: "GET"
        }).then(function (result) {
            console.log(result);
        })
    }

    // To delete a portfolio
    $("#delete-btn").on("click", function (event) {
        event.preventDefault();
        var deleteName = $("#input-del").val().trim();
        var deletePortfolio = {
            name: deleteName
        }

        // Delete a portfolio
        $.ajax("/delete/portfolio/" + deleteName, {
            type: "PUT",
            data: deletePortfolio
        }).then(function (result) {
            console.log("Deleted");
            $("#input-del").val("");
            getPortfolioPage();
        })

    })
})


