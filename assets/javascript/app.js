console.log('Project1 "Purchasing-Orders-Follow-Up-System"');


// Initialize Firebase
var config = {
    apiKey: "AIzaSyCKKIjlpL7ZYNLWxM9iFqnCzWP5vfIyTO0",
    authDomain: "purchasingordersfo.firebaseapp.com",
    databaseURL: "https://purchasingordersfo.firebaseio.com",
    projectId: "purchasingordersfo",
    storageBucket: "purchasingordersfo.appspot.com",
    messagingSenderId: "530520520576"
};
firebase.initializeApp(config);

// ////////////////////////////
// Global Variables
// ////////////////////////////

// Variable to Reference the database.
var database = firebase.database();

// Table
let poTable = $("#po-table");

// login Form Inputs
let emailInput = "";
let passwordInput = "";

// Add PO Form Inputs

// ////////////////////////////
// End Global Variables
// ////////////////////////////

// ////////////////////////////
// Functions
// ////////////////////////////

// Function to Validate the Input Information in the Modal Form
let isAddPOFormValid = function(){
    let valid = true;
    let msg = "";

    const dateTimeRegExp = /^(19|20)\d\d[- \/.](0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01]) ([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;

    let poId = $("#po-id-input").val().trim();
    let clientSite = $("#clientSite-input").val().trim();
    let validZones = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    let zone = $("#zone-input option:selected").val().trim();
    console.log("Zone Selected:",zone);
    let lon = $("#lon-input").val().trim();
    let lat = $("#lat-input").val().trim();
    let poDateTime = $("#poDateTime-input").val().trim();
    let totalPrice = $("#totalPrice-input").val().trim();
    let validStatuses = ['P', 'C', 'I', 'D'];
    let status = $("#status-input option:selected").val().trim();
    console.log("Status Selected:",status);

    let thisId;
    // poId Check
    thisId = "po-id-input"
    if (poId === ""){
        valid = false;
        msg = "Purchase Order Value Not Valid";
        $("#"+thisId+"-msg").remove();
        $('<div class="alert-msg text-danger" id="'+ thisId +'-msg">').insertAfter("#"+thisId).text(msg);
        $("#"+thisId).addClass("is-invalid");
    } else{
        $("#"+thisId+"-msg").remove();
        $("#"+thisId).removeClass("is-invalid");
    }

    // clientSite Check
    thisId = "clientSite-input";
    if (clientSite === ""){
        valid = false;
        msg = "Client Site Value Not Valid";
        $("#"+thisId+"-msg").remove();
        $('<div class="alert-msg text-danger" id="'+ thisId +'-msg">').insertAfter("#"+thisId).text(msg);
        $("#"+thisId).addClass("is-invalid");
    } else{
        $("#"+thisId+"-msg").remove();
        $("#"+thisId).removeClass("is-invalid");
    }

    // zone Check
    thisId = "zone-input";
    if (!(validZones.includes(zone))){
        valid = false;
        msg = "Zone Value is Not Valid";
        $("#"+thisId+"-msg").remove();
        $('<div class="alert-msg text-danger" id="'+ thisId +'-msg">').insertAfter("#"+thisId).text(msg);
        $("#"+thisId).addClass("is-invalid");
    } else{
        $("#"+thisId+"-msg").remove();
        $("#"+thisId).removeClass("is-invalid");
    }

    // lon Check
    thisId = "lon-input";
    if ((lon === "")||(!(-180 <= lon && lon <= 180))){
        valid = false;
        msg = "Longitude Value Not Valid [-180 <= lat <= 180]";
        $("#"+thisId+"-msg").remove();
        $('<div class="alert-msg text-danger" id="'+ thisId +'-msg">').insertAfter("#"+thisId).text(msg);
        $("#"+thisId).addClass("is-invalid");
    } else{
        $("#"+thisId+"-msg").remove();
        $("#"+thisId).removeClass("is-invalid");
    }

    // Lat Check
    thisId = "lat-input";
    if ((lat === "")||(!(-90 <= lat && lat <= 90))){
        valid = false;
        msg = "Latitude Value Not Valid [-90 <= lat <= 90]";
        $("#"+thisId+"-msg").remove();
        $('<div class="alert-msg text-danger" id="'+ thisId +'-msg">').insertAfter("#"+thisId).text(msg);
        $("#"+thisId).addClass("is-invalid");
    } else{
        $("#"+thisId+"-msg").remove();
        $("#"+thisId).removeClass("is-invalid");
    }

    // poDateTime Check
    thisId = "poDateTime-input";
    if ((poDateTime === "")||(!dateTimeRegExp.test(poDateTime))){
        valid = false;
        msg = "Date Time Value Not Valid";
        $("#"+thisId+"-msg").remove();
        $('<div class="alert-msg text-danger" id="'+ thisId +'-msg">').insertAfter("#"+thisId).text(msg);
        $("#"+thisId).addClass("is-invalid");
    } else{
        $("#"+thisId+"-msg").remove();
        $("#"+thisId).removeClass("is-invalid");

        // var ts = moment(poDateTime, "YYYY/M/D H:mm").unix();
        // console.log("ts unix:", ts);
        // var m = moment.unix(ts);
        // console.log("moment back", m.format("YYYY/M/D H:mm"));

    }

    // totalPrice Check
    thisId = "totalPrice-input";
    if ((totalPrice === "")||!($.isNumeric(totalPrice))){
        valid = false;
        msg = "Total Price Value Not Valid";
        $("#"+thisId+"-msg").remove();
        $('<div class="alert-msg text-danger" id="'+ thisId +'-msg">').insertAfter("#"+thisId).text(msg);
        $("#"+thisId).addClass("is-invalid");
    } else{
        $("#"+thisId+"-msg").remove();
        $("#"+thisId).removeClass("is-invalid");
    }

    // status Check
    thisId = "status-input";
    if (!(validStatuses.includes(status))){
        valid = false;
        msg = "Status Value Not Valid";
        $("#"+thisId+"-msg").remove();
        $('<div class="alert-msg text-danger" id="'+ thisId +'-msg">').insertAfter("#"+thisId).text(msg);
        $("#"+thisId).addClass("is-invalid");
    } else{
        $("#"+thisId+"-msg").remove();
        $("#"+thisId).removeClass("is-invalid");
    }

    if(valid){
        return true;
    } else {
        return false;
    }
}
// ////////////////////////////
// End Functions
// ////////////////////////////

// ////////////////////////////
// Event Listeners
// ////////////////////////////


// Fires When #login-modal Modal Show Up
// Assign the Form Input Variables 
// Verify that they are Declared in the Global Variables Section
$('#login-modal').on('show.bs.modal', function (event) {
    // Add Login Form Inputs
    emailInput = $("#email-input");
    passwordInput = $("#password-input");
});

// Login From The Modal
$("#login-modal-button").on("click", function(event) {
    // Test Event
    console.log("#login-modal-button Clicked");
    // Prevent the default behavior of Form' Submit button
    event.preventDefault();

    const email = emailInput.val();
    const password = passwordInput.val();
    const auth = firebase.auth();

    // Sign In with auth returns a Promise
    const promise = auth.signInWithEmailAndPassword(email, password);
    // The promise Catch capture Errors
    promise.then(function(e){
        // console.log(e.message);
        // Remove Modal Message if any
        $("#login-msg").remove();
        let modalMessage = $('<div id="login-msg" class="alert alert-succsess">').text(e.message);
        modalMessage.insertAfter($("#login-modal-msg"));
        setTimeout(function(){
            $("#login-msg").remove();
            $("#email-input").val("");
            $("#password-input").val("");
            $('#login-modal').modal('hide')
        }, 500);
    });
    // The promise Catch capture Errors
    promise.catch(function(e){
        // console.log(e.message);
        // Remove Modal Message if any
        $("#login-msg").remove();
        let modalMessage = $('<div id="login-msg" class="alert alert-danger">').text(e.message);
        modalMessage.insertAfter($("#login-modal-msg"));
    });
});

// SignUp From The Modal
$("#signup-modal-button").on("click", function(event) {
    // Test Event
    console.log("#signup-modal-button Clicked");
    // Prevent the default behavior of Form' Submit button
    event.preventDefault();

    const email = emailInput.val();
    const password = passwordInput.val();
    const auth = firebase.auth();

    // Sign In with auth returns a Promise
    const promise = auth.createUserWithEmailAndPassword(email, password);
    // The promise Catch capture Errors
    promise.then(function(e){
        // console.log(e.message);
        // Remove Modal Message if any
        $("#login-msg").remove();
        let modalMessage = $('<div id="login-msg" class="alert alert-succsess">').text(e.message);
        modalMessage.insertAfter($("#login-modal-msg"));
        setTimeout(function(){
            $("#login-msg").remove();
            $("#email-input").val("");
            $("#password-input").val("");
            $('#login-modal').modal('hide')
        }, 500);
    });
    // The promise Catch capture Errors
    promise.catch(function(e){
        // console.log(e.message);
        // Remove Modal Message if any
        $("#login-msg").remove();
        let modalMessage = $('<div id="login-msg" class="alert alert-danger">').text(e.message);
        modalMessage.insertAfter($("#login-modal-msg"));
    });
});

$("#logout-link").on("click", function(e){
    firebase.auth().signOut();
});

// Authentication Real-Time Listener
firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser){
        // console.log(firebaseUser);
        // console.log("Logged In");
        // console.log(firebaseUser);

        $("#main-container").show(500);
        $("#navbar-menu-auth").show();

        $("#welcome-container").hide(500);
        $("#navbar-menu-noauth").hide();
    }
    else{
        console.log("Not Logged In");

        $("#main-container").hide(500);
        $("#navbar-menu-auth").hide();

        $("#welcome-container").show(500);
        $("#navbar-menu-noauth").show();
    }
});


// Date Time Picker Configuration
$.datetimepicker.setLocale('en');
$('#poDateTime-input').datetimepicker({
    dayOfWeekStart : 1,
    lang:'en',
    // disabledDates:['1986/01/08','1986/01/09','1986/01/10'],
    // startDate:	'1986/01/05'
});
// $('#poDateTime-input').datetimepicker({value:'2015/04/15 05:03', step:10});
    

// Fires When #add-po-modal Modal Show Up
// Assign the Form Input Variables 
// Verify that they are Declared in the Global Variables Section
// $('#add-po-modal').on('show.bs.modal', function (event) {
//     // Add PO Form Inputs
// });

// Add PO Information From The Modal
$("#add-po-modal-button").on("click", function(event) {
    // Test Event
    console.log("#add-po-modal-button Clicked");
    // Prevent the default behavior of Form' Submit button
    event.preventDefault();

    if(isAddPOFormValid()){
        let dbPOrecord = {
            poId: $("#po-id-input").val().trim(),
            clientSite: $("#clientSite-input").val().trim(),
            zone: $("#zone-input option:selected").val().trim(),
            lon: $("#lon-input").val().trim(),
            lat: $("#lat-input").val().trim(),
            poDateTime: moment($("#poDateTime-input").val().trim(), "YYYY/M/D H:mm").unix(),
            totalPrice: $("#totalPrice-input").val().trim(),
            status: $("#status-input option:selected").val().trim(),
            createdBy: firebase.auth().currentUser.email,
            modifiedBy: firebase.auth().currentUser.email,
            dateAdded: firebase.database.ServerValue.TIMESTAMP,
        }

        console.log()

        // Code To Push the Data Record to the DataBase
        database.ref().push(dbPOrecord);

        // Debug
        console.log(dbPOrecord);
        console.log("PO Record Added");

        // Hide Modal in 0.5 sec
        setTimeout(function(){
            $('#add-po-modal').modal('hide')
        }, 500);

        // Clear Modal Information
        clearAddPOModal();
    }
    else{
        console.log("The Form Has Errors!")
    }

});

// Po Form ID Reference
// po-id-input
// clientSite-input
// zone-input   [Select]
// lon-input
// lat-input
// poDateTime-input
// totalPrice-input
// status-input [Select]

// Clears all of the text-boxes
function clearAddPOModal(){
    $("#po-id-input").val("");
    $("#clientSite-input").val("");
    // $("#zone-input").val("");
    $("#lon-input").val("");
    $("#lat-input").val("");
    $("#poDateTime-input").val("");
    $("#totalPrice-input").val("");
    // $("#status-input").val("");
}

// Convert to Unix Time
function toUnixtime(dateTime){

}


// ////////////////////////////
// End Event Listeners
// ////////////////////////////
