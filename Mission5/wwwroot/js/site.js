// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$(document).ready(function() {
    $("#calculate").click(function() {
        var hours = parseFloat($("#hours").val());
        var pricePerHour = 15;

        // Check if hours is a positive number
        if (isNaN(hours) || hours <= 0) {
            alert("Please enter a positive number for hours.");
            return;
        }

        var total = hours * pricePerHour;
        $("#total").text("$" + total.toFixed(2)); // Display total with two decimal places
        console.log("Total: " + total);
    });
});
