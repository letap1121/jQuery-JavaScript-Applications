postResult = function(list)
{
    var nameList, i;
    if ($( "#dropdown option:selected" ).text() == "all") {
        limit = list.length;
    } else {
        limit = $( "#dropdown option:selected" ).text();
    }
    $("#result").html("");
    if (list.length > 0) {
        for (i = 0; i < limit; i += 1) {
            $("#result").append("Name: " + list[i].name + "<br />" );
            $("#result").append("Position: " + list[i].title + "<br />" );
            $("#result").append("Department: " + list[i].department + "<br />" );
            $("#result").append("Salary: " + list[i].salary + "<br /><br />" );
        }
    } else {
            $("#result").html("No results found");
    }

    nameList = "";
    for (i = 0; i < list.length; i += 1) {
        nameList = nameList + list[i].name + "<br />";
    }
    $("#names").html(nameList);
}

submit = function()
{
    var searchWord = document.getElementById("key-word").value;
    query = new ChicagoEmployeesQuery(searchWord);
    query.getList(postResult);
}

$(function() {
    $("#start").click(submit);
});
