
console.log("DrawMap.js")

$(document).on("click", ".row-class", showMap);

function showMap() {
    key = $(this).attr("id")
    // console.log(key);

    database.ref().child(key)
        .once('value')
            .then(function(snapshot) {
                var record = snapshot.val();
                console.log(record);
                
                $("#infomap-modal #key").text(snapshot.key);
                $("#infomap-modal #map").text(
                    "Customer: " + record.clientSite +
                    "Lat: " + record.lat + "Long: " + record.long
                );

                $("#infomap-modal").modal("show");
            });
}