$(function() {
    $("#samPanel").hide();
    $("#appPanel").hide();
    $("#phoneError").hide();

    $("#samsung").click(function() {
        $("#samPanel").slideDown();
    });
    $("#apple").click(function() {
        $("#appPanel").slideDown();
    });

    $("form").submit(function() {
        var number;
        numberGuests = Number($("#number").val());
        if (isNaN(numberGuests)) {     //|| numberGuests.length != 10
            $("#phoneError").show().css("color", "red");
            return false;
        }

    });

})
