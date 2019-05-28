
ChicagoEmployeesQuery = function(searchKey)
{
    var url,
    url =
        "https://data.cityofchicago.org/api/views/xzkq-xp2w/rows.json" +
        "?search=key_word&jsonp=?";
    this.query = url.replace("key_word", searchKey);
}

ChicagoEmployeesQuery.prototype.getList = function(callBack)
{
    $.getJSON(this.query, function(response) {
        var i, results;
        results = [];
        for (i = 0; i < response.data.length; i += 1) {
            row = {
                name: response.data[i][8],
                title: response.data[i][9],
                department: response.data[i][10],
                salary: response.data[i][14]
            }
            results.push(row);
        }
        callBack(results);
    })
}
