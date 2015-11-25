/**
 * Rich snippet tester
 * V1
 * Vkesler
 * 12-Nov-2015
 */

var googURL = 'https://developers.google.com/structured-data/testing-tool/?hl=en&url=';
var realSitelink = "";
var itemPropsArray = [];
var unSupportedFormats = [];


function sendCallNow() {
    console.log("Launch call!");

    setData();

    sendAjaxCall();

}


function setData() {
    var RSurl2 = document.getElementById("rsurl");
    realSitelink = RSurl2.value;
    return realSitelink;

    // console.log(realsitelink);
}


function sendAjaxCall(regexPattern) {
    $.getJSON("https://alloworigin.com/get?url=" + encodeURIComponent(realSitelink) + "&callback=?", function(jd) {

        //JSON response objects
        var origin = jd.origin;
        var status = jd.status_code;
        var dest = jd.destination;
        var contents = jd.contents;
        var emptyText = "";

        var itemPropsArray2 = contents.match(/(schema.org.product|itemprop="url"|itemprop="name"|itemprop="image"|itemprop="description"|itemprop="aggregateRating"|itemprop="itemReviewed"|itemprop="ratingCount"|itemprop="offers"|itemprop="price"|itemprop="priceCurrency")/gi);
        var itemPropsArray = [];
        for (var i = 0; i < itemPropsArray2.length; i++) {
            itemPropsArray.push(itemPropsArray2[i].toLowerCase());
        }

        var itemPropBag = ['schema.org/product', 'itemprop="url"', 'itemprop="name"', 'itemprop="image"', 'itemprop="description"', 'itemprop="aggregaterating"', 'itemprop="itemreviewed"', 'itemprop="ratingcount"', 'itemprop="offers"', 'itemprop="price"', 'itemprop="pricecurrency"'];

        var app_key = contents.match(/staticw2.yotpo.com.(\w*)/);
        $("#appkey").append("<h4>" + app_key[1] + "</h4>");

        var j = 1;
        for (var i = 0; i < itemPropBag.length; i++) {
            if (itemPropsArray.indexOf(itemPropBag[i]) >= 0) {
                $("#snippet1").append('' + j + '. ' + itemPropBag[i] + '<br>');
                j += 1;
            } else {
                $("#snippet111").append(itemPropBag[i] + ' is missing!' + '<br>');
            }

            var count = contents.split(itemPropBag[i]).length - 1;
            $("#dupli2").append(itemPropBag[i] + ' dups: ' + count + "<br>");

            if (count > 4) {
                $("#dupli").append(itemPropBag[i] + " dupls!");
            }
        }

    });
}
