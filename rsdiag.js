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

        // Regexp Patterns buildup need to add the IF mess below into this pattern
        var findStuff = regexPattern.match(/(schema.org.product)/gi).attr(contents);

        itemPropsArray = contents.match(/(schema.org.product|itemprop="url"|itemprop="name"|itemprop="image"|itemprop="description"|itemprop="aggregateRating"|itemprop="itemReviewed"|itemprop="ratingCount"|itemprop="offers"|itemprop="price"|itemprop="priceCurrency")/gi);
        unSupportedFormats = contents.match(/(application.ld.json|data.vocabulary.org.Product)/gi);
        var itemPropBag = ['itemtype="http://schema.org/Product"', 'itemprop="url"', 'itemprop="name"', 'itemprop="image"', 'itemprop="description"', 'itemprop="aggregateRating"', 'itemprop="itemReviewed"', 'itemprop="ratingCount"', 'itemprop="offers"', 'itemprop="price"', 'itemprop="priceCurrency"'];


        var app_key = contents.match(/staticw2.yotpo.com.(\w*)/);
        //console.log(app_key[1]);
        $("#appkey").append("<h4>" + app_key[1] + "</h4>");


        // need to add append expression into the for loop
        for (var i = 0; i < itemPropBag.length; i++)
        {   if ( /*expression*/ ) { continue; }
            console.log(emptyText += itemPropBag[i].indexOf(itemPropsArray));
        }


        (function() {
            if (itemPropsArray.indexOf('schema.org/Product') >= 0) {
                $("#snippet1").append('1. ' + itemPropBag["0"]);
            } else {
                $("#snippet111").append('1.product itemscope is missing! ');
            }

            if (itemPropsArray.indexOf('itemprop="url"') >= 0) {
                $("#snippet2").append('2. ' + itemPropBag["1"]);
            } else {
                $("#snippet22").append('2. itemprop="url" is missing!');
            }


            if (itemPropsArray.indexOf('itemprop="name"') >= 0) {
                $("#snippet3").append('3. ' + itemPropBag["2"]);
            } else {
                $("#snippet33").append('3. itemprop="name" is missing! (required) ');
                $("#req1").append("Minimum markup requirements not met");
            }

            if (itemPropsArray.indexOf('itemprop="image"') >= 0) {
                $("#snippet4").append('4. ' + itemPropBag["3"]);
            } else {
                $("#snippet44").append('4. itemprop="image" is missing!');
            }

            if (itemPropsArray.indexOf('itemprop="description"') >= 0) {
                $("#snippet5").append('5. ' + itemPropBag["4"]);
            } else {
                $("#snippet55").append('5. itemprop="description" is missing!');
            }

            if (itemPropsArray.indexOf('itemprop="aggregateRating"') >= 0) {
                $("#snippet6").append('6. ' + itemPropBag["5"]);
            } else {
                $("#snippet66").append('6. itemprop="aggregateRating" is missing! (required, should appear 24H after installation)');
                $("#req1").append("Minimum markup requirements not met");
            }

            if (itemPropsArray.indexOf('itemprop="itemReviewed"') >= 0) {
                $("#snippet7").append('7. ' + itemPropBag["6"]);
            } else {
                $("#snippet77").append('7. itemprop="itemReviewed" is missing!');
            }

            if (itemPropsArray.indexOf('itemprop="ratingCount"') >= 0) {
                $("#snippet8").append('8. ' + itemPropBag["7"]);
            } else {
                $("#snippet88").append('8. itemprop="ratingCount" is missing!');
            }

            if (itemPropsArray.indexOf('itemprop="offers"') >= 0) {
                $("#snippet9").append('9. ' + itemPropBag["8"]);
            } else {
                $("#snippet99").append('9. itemprop="offers" is missing!');
            }

            if (itemPropsArray.indexOf('itemprop="price"') >= 0) {
                $("#snippet10").append('10. ' + itemPropBag["9"]);
            } else {
                $("#snippet00").append('10. itemprop="price" is missing! (required)');
                $("#req1").append("Minimum markup requirements not met");
            }

            if (itemPropsArray.indexOf('itemprop="priceCurrency"') >= 0) {
                $("#snippet11").append('11. ' + itemPropBag["10"]);
            } else {
                $("#snippet111").append('11. itemprop="priceCurrency" is missing! (required)');
                $("#req1").append("Minimum markup requirements not met");
            }

            $("#status").append(status);
            $("#unSupportedFormats").append(" " + unSupportedFormats);
        }());





        (function() {
            var count1 = contents.split(/(schema.org.product)/gi).length - 1;
            var count2 = contents.split(/(itemprop="url")/gi).length - 1;
            var count3 = contents.split(/(itemprop="name")/gi).length - 1;
            var count4 = contents.split(/(itemprop="image")/gi).length - 1;
            var count5 = contents.split(/(itemprop="description")/gi).length - 1;
            var count6 = contents.split(/(itemprop="aggregateRating")/gi).length - 1;
            var count7 = contents.split(/(itemprop="itemReviewed")/gi).length - 1;
            var count8 = contents.split(/(itemprop="ratingCount")/gi).length - 1;
            var count9 = contents.split(/(itemprop="offers")/gi).length - 1;
            var count10 = contents.split(/(itemprop="price")/gi).length - 1;
            var count11 = contents.split(/(itemprop="priceCurrency")/gi).length - 1;

            if (contents.split(/(itemprop="url")/gi).length > 5) {
                $("#dupli").append("URL duplicates!");
            }

            if (contents.split(/(itemprop="name")/gi).length > 5) {
                $("#dupli").append("Name duplicates!");
            }

            if (contents.split(/(itemprop="image")/gi).length > 5) {
                $("#dupli").append("Image duplicates!");
            }

            if (contents.split(/(itemprop="description")/gi).length > 5) {
                $("#dupli").append("description duplicates!");
            }

            if (contents.split(/(itemprop="aggregateRating")/gi).length > 5) {
                $("#dupli").append("aggregate rating duplicates!");
            }
            if (contents.split(/(itemprop="itemReviewed")/gi).length > 5) {
                $("#dupli").append("itemReviewed duplicates!");
            }
            if (contents.split(/(itemprop="ratingCount")/gi).length > 5) {
                $("#dupli").append("rating count duplicates!");
            }
            if (contents.split(/(itemprop="offers")/gi).length > 5) {
                $("#dupli").append("offers duplicates!");
            }
            if (contents.split(/(itemprop="price")/gi).length > 5) {
                $("#dupli").append("price duplicates!");
            }
            if (contents.split(/(itemprop="priceCurrency")/gi).length > 5) {
                $("#dupli").append("pricecurrency duplicates!");
            }


            $("#dupli2").append('Product items: ' + count1 + "<br>" + 'URL items: ' + count2 + "<br>" + 'Name items: ' + count3 + "<br>" + 'Image items: ' + count4 + "<br>" + 'Description items: ' + count5 + "<br>" + 'AggregateRating items: ' + count6 + "<br>" + 'ItemReviewed items: ' + count7 + "<br>" + 'RatingCount items: ' + count8 + "<br>" + 'Offers items: ' + count9 + "<br>" + 'Price items: ' + count10 + "<br>" + 'PriceCurrency items: ' + count11 + "<br>");
        }());
        

    });
}
