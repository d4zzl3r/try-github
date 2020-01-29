var conVal, cityVal;
var coun = new Array;




$(document).ready(function () {
    $("#country option:first").prop("selected", true);
    var obj1 = new XMLHttpRequest();
    var url = "https://restcountries.eu/rest/v2/all";
    obj1.open("GET", url, true);
    obj1.send();
    obj1.onreadystatechange = function () {
        if (obj1.readyState == 4 && obj1.status == 200) {
            var jsondata = JSON.parse(obj1.responseText);
            coun = jsondata;
            for (var i = 0; i < coun.length; i++) {
                $("#country").append("<option value =" + coun[i].name + ">" + coun[i].name + "</option>");
            }
            $("#country option:first").prop("selected", true);
        }
    };


    $("#country").change(function () {

        $("#city option").hide();
        $("#city option:first").prop("selected", true);
        conVal = $(this).val();
        var obj2 = new XMLHttpRequest();
        var url1 = "/data/CSC.json";
        obj2.open("GET", url1, true);
        obj2.send();
        obj2.onreadystatechange = function () {
            if (obj2.readyState == 4 && obj2.status == 200) {
                var jsondata = JSON.parse(obj2.responseText);
                coun = jsondata;
                for (var i = 0; i < coun.length; i++) {
                    if (conVal == coun[i].Name) {
                        for (var j = 0; j < coun[i].States.length; j++) {
                            $("#city").append("<option value =" + coun[i].States[j] + ">" + coun[i].States[j] + "</option>");
                        }
                    }
                }
            };
        }
        $("#city option:first").prop("selected", true);
    });

    $("#city").change(function () {
        cityVal = $(this).val();
        var rr = "<tr><td>" + conVal + "</td><td>" + cityVal + "</td></tr>";
        $("#tab tr:last").after(rr);

        


    });
});
