var currencyRateCache=null;
//funcion para convertir MXN a USD
 function convertToUSD(callbackPrice){
    
    if (currencyRateCache!==null){
        callbackPrice(currencyRateCache);   
    };

    $.ajax({
        url: 'https://free.currencyconverterapi.com/api/v6/convert?q=USD_MXN,MXN_USD&compact=ultra',
        method: "GET"
    }).then(function(json){
        //console.log(json);
        currencyRateCache=json.USD_MXN;
        callbackPrice(currencyRateCache);
        console.log("cambio"+currencyRateCache);
    }).fail(function(error){
        callbackPrice(19);
    });
   
};


 //difference between current time and deadline
 function getTimeRemaining(endtime){
    var currentTime=Math.round((new Date()).getTime() / 1000);
    var deadline= parseInt(endtime)+48*60*60;
    var t = deadline - currentTime;
     var seconds = Math.floor( (t) % 60 );
     var minutes = Math.floor( (t/60) % 60 );
     var hours = Math.floor( (t/(60*60)) % 24 );
     var days = Math.floor( t/(60*60*24));
         return {
             'total': t,
             'days': days,
             'hours': hours,
             'minutes': minutes,
             'seconds': seconds
         };
}
//show the time remaining
 function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    var timeinterval = setInterval(function(){
        var t = getTimeRemaining(endtime);
        clock.innerHTML = 'days: ' + t.days + '<br>' +
                        'hours: '+ t.hours + '<br>';
        if(t.total<=0){
        clearInterval(timeinterval);
        }
    },1000);
}

 

convertToUSD(function(USDMXN){ 
    // Firebase watcher .on("child_added"
    database.ref().on("child_added", function(snapshot) {

        // <th>PO Id</th>
        // <th>Customer</th>
        // <th>Zone</th>
        // <th>Total Price [MXN]</th>
        // <th>Total Price [USD]</th>
        // <th>Time Left Before Delivery</th>
        // <th>Status</th>

            let row = $('<tr id="' + snapshot.key + '">');
            row.addClass("row-class");
        
            let poIdTd = $("<td>");
            poIdTd.text(snapshot.val().poId);
        
            let customerTd = $("<td>");
            customerTd.text(snapshot.val().clientSite);
        
            let zoneTd = $("<td>");
            zoneTd.text(snapshot.val().zone);
        
            let priceMxnTd = $("<td>");
            priceMxnTd.text("$"+snapshot.val().totalPrice);
        
            let priceUsdTd = $("<td>");
            // Convert MXN to USD
            let priceUSD=Math.round((snapshot.val().totalPrice/USDMXN)*100)/100;
            console.log(priceUSD);
            priceUsdTd.text("$"+priceUSD);
            
            
            let timeLeftTd = $("<td>");
            //giving an id per timecell
            timeLeftTd.attr("id","time"+snapshot.val().poId);
        
            let statusTd = $("<td>");
            statusTd.text(snapshot.val().status);
        
            row.append(poIdTd);
            row.append(customerTd);
            row.append(zoneTd);
            row.append(priceMxnTd);
            row.append(priceUsdTd);
            row.append(timeLeftTd);
            row.append(statusTd);
        
            row.appendTo(poTable);
            initializeClock("time"+snapshot.val().poId,snapshot.val().poDateTime);
        

        // Handle the errors
    }, function(errorObject) {
        console.log("Errors handled: " + errorObject.code);
    });
});

