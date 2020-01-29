var url;
var xhrObj = new XMLHttpRequest();
var coun = new Array;
var conVal, cityVal;

$(document).ready(function () {
    function sleep(milliseconds) { 
        let timeStart = new Date().getTime(); 
        while (true) { 
            let elapsedTime = new Date().getTime() - timeStart; 
            if (elapsedTime > milliseconds) { 
                break; 
            } 
        } 
    } 


    async function getJson(url) {
        debugger;
        var jsondata;
        xhrObj.open("GET", url, true);
        
        xhrObj.send();
       
        xhrObj.onreadystatechange = function () {
            if (xhrObj.readyState == 4 && xhrObj.status == 200) {
                jsondata = JSON.parse(xhrObj.responseText);

            }
        };
        sleep(2000);
        
        return jsondata;
    }

    coun = getJson("https://restcountries.eu/rest/v2/all");
    for (var i = 0; i < coun.length; i++) {
        $("#country").append("<option value =" + coun[i].name + ">" + coun[i].name + "</option>");
    }

    $("#country").change(function () {
        $("#city option").hide();
        conVal = $(this).val();
        coun = getJson("/data/csc.json");
        for (var i = 0; i < coun.length; i++) {
            if (conVal == coun[i].name) {
                for (var j = 0; j < coun[i].States.length; j++) {
                    $("#city").append("<option value =" + coun[i].States[j] + ">" + coun[i].States[j] + "</option>");
                }
            }
        }


    });

})