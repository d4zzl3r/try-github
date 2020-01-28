var conVal, cityVal;
var coun = new Array;
var obj1 = new XMLHttpRequest();
var url = "/data/csc.json";

obj1.onreadystatechange = function () {
    if (obj1.readyState == 4 && obj1.status == 200) {
        var jsondata = JSON.parse(obj1.responseText);
        coun = jsondata;
    }
};
obj1.open("GET", url, true);
obj1.send();

$(document).ready(function () {
    $("#country option").hide();
    for (var i = 0; i < coun.length; i++) {
        $("#country").append("<option value =" + coun[i].Name + ">" + coun[i].Name + "</option>");
    }

    $("#country").change(function () {
        $("#city option").hide();
        conVal = $(this).val();
        for (var i = 0; i < coun.length; i++) {
            if (conVal == coun[i].Name) {
                for (var j = 0; j < coun[i].States.length; j++) {
                    $("#city").append("<option value =" + coun[i].States[j] + ">" + coun[i].States[j] + "</option>");
                }
            }
        }
        $("#city option:first").prop("selected", true);
    });

    $("#city").change(function () {
        cityVal = $(this).val();
        var rr = "<tr><td>" + conVal + "</td><td>" + cityVal + "</td></tr>";
        $("#tab tr:last").after(rr);

    });
});
