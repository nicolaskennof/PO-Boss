
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

    let timeLeftTd = $("<td>");
    // Calculate it with moment JS

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

    // Handle the errors
}, function(errorObject) {
    console.log("Errors handled: " + errorObject.code);
});
