// let buttonComplete = $('<button type="button" class="btn btn-sm btn-success btn-complete" data-id= ' + snapshot.key + '>').text("C");
// let buttonIncomplete = $('<button type="button" class="btn btn-sm btn-danger btn-incomplete" data-id= ' + snapshot.key + '>').text("I");
// let buttonPending = $('<button type="button" class="btn btn-sm btn-secondary btn-pending" data-id= ' + snapshot.key + '>').text("P");

// Statuses Array from chart.js
// drawPoStatusChart();
// let statusesLabels = ['P', 'I', 'C', 'D']
// let statusValues = []

$(document).on("click", ".btn-complete", statusCompleteUpdate);

function statusCompleteUpdate() {
    key = $(this).attr("data-id")
    // console.log(key);

    console.log("Complete Clicked");
    console.log(key);

    let buttonPending = $('<button type="button" class="btn btn-sm btn-secondary btn-pending" data-id= ' + key + '>').text("P");

    database.ref().child(key).update({ status: "C", modifiedBy: firebase.auth().currentUser.email });

    $('#' + key).find('.status-td').text("C");
    $('#' + key).find('.btn-complete').remove();
    $('#' + key).find('.btn-incomplete').remove();

    $('#' + key).find('.btn-row').append(buttonPending);

    // Update Chart
    statusValues[0]--
    statusValues[2]++
    drawPoStatusChart();
}

$(document).on("click", ".btn-incomplete", statusInCompleteUpdate);

function statusInCompleteUpdate() {
    key = $(this).attr("data-id")

    console.log("In-Complete Clicked");
    console.log(key);

    let buttonPending = $('<button type="button" class="btn btn-sm btn-secondary btn-pending" data-id= ' + key + '>').text("P");

    database.ref().child(key).update({ status: "I", modifiedBy: firebase.auth().currentUser.email });
    $('#' + key).find('.status-td').text("I");
    $('#' + key).find('.btn-complete').remove();
    $('#' + key).find('.btn-incomplete').remove();

    $('#' + key).find('.btn-row').append(buttonPending);

    // Update Chart
    statusValues[0]--
    statusValues[1]++
    drawPoStatusChart();
}

$(document).on("click", ".btn-pending", statusPending);

function statusPending() {
    key = $(this).attr("data-id")

    console.log("Pending Clicked");
    console.log(key);

    let buttonComplete = $('<button type="button" class="btn btn-sm btn-success btn-complete" data-id= ' + key + '>').text("C");
    let buttonIncomplete = $('<button type="button" class="btn btn-sm btn-danger btn-incomplete" data-id= ' + key + '>').text("I");

    database.ref().child(key).update({ status: "P", modifiedBy: firebase.auth().currentUser.email });
    let currentStatus = $('#' + key).find('.status-td').text();
    $('#' + key).find('.status-td').text("P");
    $('#' + key).find('.btn-pending').remove();

    $('#' + key).find('.btn-row').append(buttonComplete);
    $('#' + key).find('.btn-row').append(buttonIncomplete);

    // Update Chart
    if (currentStatus === "C") {
        statusValues[2]--
    } else if (currentStatus === "I") {
        statusValues[1]--
    }
    statusValues[0]++
    drawPoStatusChart();
}
