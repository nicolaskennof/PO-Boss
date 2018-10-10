
database.ref().on("child_added", function(snapshot) {
    // console.log(snapshot.key);
});

console.log();

// Define the 2 Zone Vectors
let zoneLabels = ['A', 'B', 'C', 'D', 'E', 'F', 'H']
let zoneValues = []

database.ref().on("child_added", function(snapshot) {
    // console.log(snapshot.val().zone);
    let zone = snapshot.val().zone
    for (let i = 0; i < zoneLabels.length; i++){
        // If theres no value in position i : initialize it in 0;
        if(!zoneValues[i]){
            zoneValues[i] = 0;
        }
        // If the value of zone is the same as in the label increment its counter.
        if (zone === zoneLabels[i]){
            zoneValues[i]++;
        }
    }
});

// ////////////////////////////
// Charts
// ////////////////////////////

// PO statuses
var ctxStatus = document.getElementById('ordersStatus').getContext('2d');
var chartBestCustomers = new Chart(ctxStatus, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ["On-time", "Delivered", "Delayed", "Incomplete"],
        datasets: [{
            label: "Don't know how to do that!",
            backgroundColor: [
                "#587C0C",
                "#007ACC",
                "#CBBD2D",
                "#C3602C"],
            borderColor: [
                "#587C0C",
                "#007ACC",
                "#CBBD2D",
                "#C3602C"],
            data: [7, 10, 15, 20],
        }]
    },

    // Configuration options go here
    options: {}
});

// Most purchasing zones
var ctxZones = document.getElementById('bestZones').getContext('2d');
var chartBestCustomers = new Chart(ctxZones, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        // labels: ["Zone 1", "Zone 2", "Zone 3", "Zone 4", "Zone 5", "Zone 6"],
        labels: zoneLabels,
        datasets: [{
            label: "",
            backgroundColor: 'rgb(0, 122, 204)',
            borderColor: 'rgb(0, 122, 204)',
            // data: [5, 10, 15, 20, 25, 30],
            data: zoneValues,
        }]
    },

    // Configuration options go here
    options: {}
});

// Most purchasing customers
var ctxCustomers = document.getElementById('bestCustomers').getContext('2d');
var chartBestCustomers = new Chart(ctxCustomers, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ["Client 1", "Client 2", "Client 3", "Client 4", "Client 5"],
        datasets: [{
            label: "",
            backgroundColor: 'rgb(88, 124, 12)',
            borderColor: 'rgb(88, 124, 12)',
            data: [90, 80, 70, 60, 50],
        }]
    },

    // Configuration options go here
    options: {}
});

// ////////////////////////////
// End Charts
// ////////////////////////////