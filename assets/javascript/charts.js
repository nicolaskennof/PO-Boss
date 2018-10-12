// ////////////////////////////
// Charts datas retrieval
// ////////////////////////////

// Chart 1 //
// database.ref().on("child_added", function (snapshot) {
// });

console.log();

// Define vectors
let statusesLabels = ['P', 'I', 'C', 'D']
let statusValues = []

database.ref().on("child_added", function (snapshot) {
    let status = snapshot.val().status
    for (let i = 0; i < statusesLabels.length; i++) {
        // If theres no value in position i : initialize it in 0;
        if (!statusValues[i]) {
            statusValues[i] = 0;
        }
        // If the value of zone is the same as in the label increment its counter.
        if (status === statusesLabels[i]) {
            statusValues[i]++;
        }
    }
    drawPoStatusChart();
});

// Chart 2 //
// database.ref().on("child_added", function (snapshot) {
// });

console.log();

// Define vectors
let zoneLabels = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
let zoneValues = []

database.ref().on("child_added", function (snapshot) {
    let zone = snapshot.val().zone
    for (let i = 0; i < zoneLabels.length; i++) {
        // If theres no value in position i : initialize it in 0;
        if (!zoneValues[i]) {
            zoneValues[i] = 0;
        }
        // If the value of zone is the same as in the label increment its counter.
        if (zone === zoneLabels[i]) {
            zoneValues[i]++;
        }
    }
    drawBestZonesChart();
});

// Chart 3 //


// ////////////////////////////
// Charts Draw
// ////////////////////////////

// PO statuses
function drawPoStatusChart() {
    var ctxStatus = document.getElementById('ordersStatus').getContext('2d');
    var chartPoStatuses = new Chart(ctxStatus, {
        type: 'bar',
        data: {
            labels: ["Pending", "Incomplete", "Complete", "Delayed"],
            datasets: [{
                label: "",
                backgroundColor: [
                    "#A8E0FF",
                    "#3E517A",
                    "#70CAD1",
                    "#B08EA2"],
                borderColor: [
                    "#99CCE8",
                    "#3E517A",
                    "#5CA6AC",
                    "#917585"],
                data: statusValues,
            }]
        },
        options: {
            legend: {
                display: false
            },
            title: {
                display: true,
                text: "1 - PO Status Overview"
            },
            responsive: true,
        }
    });
};

// Most purchasing zones
function drawBestZonesChart() {
    var ctxZones = document.getElementById('bestZones').getContext('2d');
    var chartBestZones = new Chart(ctxZones, {
        type: 'bar',
        data: {
            labels: ['Zone A', 'Zone B', 'Zone C', 'Zone D', 'Zone E', 'Zone F', 'Zone G', 'Zone H'],
            datasets: [{
                label: "",
                backgroundColor: '#A2E8F6',
                borderColor: '#82CFDF',
                data: zoneValues,
            }]
        },
        options: {
            legend: {
                display: false
            },
            title: {
                display: true,
                text: "2 - Delivery Zones Overview"
            },
            responsive: true,
        }
    });
};

// ////////////////////////////
// End Charts
// ////////////////////////////