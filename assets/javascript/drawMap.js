
console.log("DrawMap.js")

// $(document).on("click", ".row-class", showMap);
$(document).on("click", ".show-map", showMap);

function showMap() {
  key = $(this).attr("data-id")
  // console.log(key);

  database.ref().child(key)
    .once('value')
    .then(function (snapshot) {
      let record = snapshot.val();
      // console.log(record);

      let lat = record.lat;
      let lng = record.lon;
      let clientSite = record.clientSite;

      let appId = "q2GwNTjYOVJI2g6cBnwO";
      let appCode = "ezcVvBgQdSFtrw-d4N9kbA";

      let imgWidth = "600";
      let imgHeight = "400";
      let imgFormat = "0"  // PNG
      let zoom = 15;

      let markBgColor = "white";
      let markTextColor = "red";
      let markText = clientSite;

      let myURL =
        "https://image.maps.api.here.com/mia/1.6/mapview?"
        + "app_id=" + appId
        + "&app_code=" + appCode
        + "&z=" + zoom
        + "&f=" + imgFormat + "&w=" + imgWidth + "&h=" + imgHeight
        + "&poix0=" + lat + "%2C" + lng + "%3B" + markBgColor + "%3B" + markTextColor + "%3B20%3B" + markText

      // console.log(myURL);

      $.ajax({
        url: myURL,
        method: "GET"
      }).done(function (request) {
        // If there is a response the Map will be rendered
        $("#img-map").remove();
        let imgElement = $('<img alt="Map" id="img-map">');

        imgElement.attr("src", myURL);
        $("#map").append(imgElement);

        $("#infomap-modal").modal("show");
      });

      // $("#infomap-modal #key").text(snapshot.key);
      // $("#infomap-modal #map").text(
      //     "Customer: " + record.clientSite +
      //     "Lat: " + record.lat + "Long: " + record.long
      // );

      $("#infomap-modal").modal("show");
    });
}

// NOTES
// https://image.maps.api.here.com/mia/1.6/mapview?tx0=39.9%2C116.4%3B%E5%8C%97%E4%BA%AC%3Bblue%3Bgreen%3B20&tx1=31.2%2C121.5%3B%E4%B8%8A%E6%B5%B7%3Bwhite%3Bred%3B20&z=4&app_id=devportal-demo-20180625&app_code=9v2BkviRwi9Ot26kp2IysQ
// https://image.maps.api.here.com/mia/1.6/mapview?poix0=41.8625%2C-87.6166%3Bblue%3Bred%3B20%3BC&poix1=41.94833%2C-87.6555%3Bffffff%3Bffa500%3B20%3BC&app_id=devportal-demo-20180625&app_code=9v2BkviRwi9Ot26kp2IysQ