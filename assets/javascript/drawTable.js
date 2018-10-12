 // set endpoint and your access key
 //var totalPrice=0; //aquí es poner que sea el número que sale en la tabla con el precio en MXN
 function convertToUSD(totalPrice){
    var endpoint = 'live';
    var access_key = 'e208a825539a0db2517710f6457203b5';
    var result;
    // get the most recent exchange rates via the "live" endpoint:
    // $.ajax({
    //     url: 'https://apilayer.net/api/' + endpoint + '?access_key=' + access_key,
    //     success: function (json) {

    //         // exchange rata data is stored in json.quotes
    //         //console.log(json.quotes.USDMXN);
    //         var USDMXN=json.quotes.USDMXN;
    //         console.log("tipo de cambio "+USDMXN);

    //         // source currency is stored in json.source
    //         ///console.log(json.source);
    //         var totalPriceUSD=Math.round(totalPrice/USDMXN*100)/100;
    //         console.log(totalPriceUSD);
    //         result=totalPriceUSD;
    //     }
    // });
    // console.log(result);
    return result;
};
 //countdown
 var deadline = 'october 31 2018'; //cambiar a poDateTime+48h
 function getTimeRemaining(endtime){
      var t = Date.parse(endtime) - Date.parse(new Date());
     var seconds = Math.floor( (t/1000) % 60 );
     var minutes = Math.floor( (t/1000/60) % 60 );
     var hours = Math.floor( (t/(1000*60*60)) % 24 );
     var days = Math.floor( t/(1000*60*60*24) );
         return {
             'total': t,
             'days': days,
             'hours': hours,
             'minutes': minutes,
             'seconds': seconds
         };
}

 function initializeClock(id, endtime){
 var clock = document.getElementById(id);
 var timeinterval = setInterval(function(){
     var t = getTimeRemaining(endtime);
     clock.innerHTML = 'days: ' + t.days + '<br>' +
                     'hours: '+ t.hours + '<br>' +
                     'minutes: ' + t.minutes + '<br>';
     if(t.total<=0){
     clearInterval(timeinterval);
     }
 },1000);
 }

 //initializeClock('clockdiv', deadline);

 
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
    priceMxnTd.text(snapshot.val().totalPrice);

    let priceUsdTd = $("<td>");
    // Convert MXN to USD
    priceUsdTd.text(convertToUSD(snapshot.val().totalPrice));

    let timeLeftTd = $("<td>");
    // Calculate it with moment JS

    let statusTd = $('<td class="status-td">');
    statusTd.text(snapshot.val().status);

    // Buttons for Statuses New Addition
    let myStatus = snapshot.val().status;

    let actionsTd = $("<td>");
    let buttonsRow = $('<div class="row btn-row">');
    let buttonMap = $('<button type="button" class="btn btn-sm btn-primary show-map" data-id= ' + snapshot.key + '>').html('<i class="fas fa-map-marker-alt"></i>');
    let buttonComplete = $('<button type="button" class="btn btn-sm btn-success btn-complete" data-id= ' + snapshot.key + '>').text("C");
    let buttonIncomplete = $('<button type="button" class="btn btn-sm btn-danger btn-incomplete" data-id= ' + snapshot.key + '>').text("I");
    let buttonPending = $('<button type="button" class="btn btn-sm btn-secondary btn-pending" data-id= ' + snapshot.key + '>').text("P");
    buttonsRow.append(buttonMap);

    if (myStatus === "P" || myStatus === "D"){
        buttonsRow.append($("<span>").text("-"));
        buttonsRow.append(buttonComplete);
        buttonsRow.append(buttonIncomplete);
    } else if (myStatus === "C" || myStatus === "I"){
        buttonsRow.append($("<span>").text("-"));
        buttonsRow.append(buttonPending);
    }
    
    actionsTd.append(buttonsRow)
    // End New Addition

    row.append(poIdTd);
    row.append(customerTd);
    row.append(zoneTd);
    row.append(priceMxnTd);
    row.append(priceUsdTd);
    row.append(timeLeftTd);
    row.append(statusTd);
    row.append(actionsTd);

    row.appendTo(poTable);

    // Handle the errors
}, function(errorObject) {
    console.log("Errors handled: " + errorObject.code);
});


/*Acomodar AJAX
llamar bien el tiempo remaining
Unix más 48*/ 