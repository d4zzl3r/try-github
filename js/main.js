{/* <script src ="/js/jquery.js"></script> */}
// debugger;
console.log("HELLO");
var coun =  new Array;
var obj1 = new XMLHttpRequest();
var url = "/data/csc.json";
obj1.onreadystatechange = function ()
{
    if(obj1.readyState == 4 && obj1.status == 200)
    {
        // debugger;
        var jsondata = JSON.parse(obj1.responseText);
            coun = jsondata;
            // debugger;

    }
};
obj1.open("GET",url,true);
obj1.send();
