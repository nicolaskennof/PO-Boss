var currencyRateCache = null;
//funcion para convertir MXN a USD
function convertToUSD(callbackPrice) {

    if (currencyRateCache !== null) {
        callbackPrice(currencyRateCache);
    };

    $.ajax({
        url: 'https://free.currencyconverterapi.com/api/v6/convert?q=USD_MXN,MXN_USD&compact=ultra',
        method: "GET"
    }).then(function (json) {
        //console.log(json);
        currencyRateCache = json.USD_MXN;
        callbackPrice(currencyRateCache);
        //console.log("cambio"+currencyRateCache);
    }).fail(function (error) {
        callbackPrice(19);
    });

};


//difference between current time and deadline
function getTimeRemaining(endtime) {
    var currentTime = Math.round((new Date()).getTime() / 1000);
    //console.log("current Time"+currentTime);
    var deadline = parseInt(endtime) + 172800;
    //console.log("deadline"+deadline);
    var t = deadline - currentTime;
    //console.log("t"+t);
    var seconds = Math.floor((t) % 60);
    var minutes = Math.floor((t / 60) % 60);
    var hours = Math.floor((t / (60 * 60)) % 24);
    var days = Math.floor(t / (60 * 60 * 24));
    var totalhours = Math.floor((t / (60 * 60)));
    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds,
        'totalhours': totalhours
    };
}



convertToUSD(function (USDMXN) {
    // Firebase watcher .on("child_added"
    database.ref().on("child_added", function (snapshot) {

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
        priceMxnTd.text("$" + snapshot.val().totalPrice);

        let priceUsdTd = $("<td>");
        // Convert MXN to USD
        let priceUSD = Math.round((snapshot.val().totalPrice / USDMXN) * 100) / 100;
        //console.log(priceUSD);
        priceUsdTd.text("$" + priceUSD);


        let timeLeftTd = $("<td>");
        //giving an id per timecell
        timeLeftTd.attr("id", "time" + snapshot.val().poId);
        var totalhours = (getTimeRemaining(snapshot.val().poDateTime).totalhours)
        timeLeftTd.text(totalhours);
        if (totalhours <= 0) {
            database.ref().child(snapshot.key).update({ status: "D" });

            $('#' + snapshot.key).find('.status-td').text("D");
        };

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

        if (myStatus === "P" || myStatus === "D") {
            buttonsRow.append($("<span>").text("-"));
            buttonsRow.append(buttonComplete);
            buttonsRow.append(buttonIncomplete);
        } else if (myStatus === "C" || myStatus === "I") {
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
    }, function (errorObject) {
        console.log("Errors handled: " + errorObject.code);
    });
});