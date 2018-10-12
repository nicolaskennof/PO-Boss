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

    let poId = $("#po-id-input").val().trim();
    let clientSite = $("#clientSite-input").val().trim();
    let validZones = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    let zone = $("#zone-input option:selected").val().trim();
    let lon = $("#lon-input").val().trim();
    let lat = $("#lat-input").val().trim();
    let poDateTime = $("#poDateTime-input").val().trim();
    let totalPrice = $("#totalPrice-input").val().trim();
    let validStatuses = ['P', 'C', 'I', 'D'];
    let status = $("#status-input option:selected").val().trim();

    // poId Check
    if (poId === ""){
        valid = false;
        msg = "Purchase Order Value Not Valid";
        $('<div class="alert-msg text-red" id="po-id-input-msg">').insertAfter("#po-id-input").text(msg);;
    }

    // clientSite Check
    if (clientSite === ""){
        valid = false;
        msg = "Client Site Value Not Valid";
        $("#clientSite-input-msg").text(msg);
    }

    // zone Check
    if (!(zone in validZones)){
        valid = false;
        msg = "Zone Value Not Valid";
        $("#zone-input-msg").text(msg);
    }

    // lon Check
    if (lon === ""){
        valid = false;
        msg = "Longitude Value Not Valid";
        $("#lon-input-msg").text(msg);
    }

    // Lat Check
    if (lat === ""){
        valid = false;
        msg = "Latitude Value Not Valid";
        $("#lat-input-msg").text(msg);
    }

    // poDateTime Check
    if (poDateTime === ""){
        valid = false;
        msg = "Date Time Value Not Valid";
        $("#poDateTime-input-msg").text(msg);
    }

    // totalPrice Check
    if (totalPrice === ""){
        valid = false;
        msg = "Total Price Value Not Valid";
        $("#totalPrice-input-msg").text(msg);
    }

    // status Check
    if (!(status in validStatuses)){
        valid = false;
        msg = "Status Value Not Valid";
        $("#status-input-msg").text(msg);
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
        console.log(e.message);
        setTimeout(function(){
            $('#login-modal').modal('hide')
        }, 500);
    });
    // The promise Catch capture Errors
    promise.catch(function(e){
        console.log(e.message);
        $("#login-modal-msg").text(e.message);
    });

    // $('#login-modal').modal('hide');
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
        console.log("Sign-Up Success");
        $("#login-modal-msg").text("Sign-Up Success");
        $("#login-modal-msg").removeClass("login-error");
        $("#login-modal-msg").addClass("login-success");
    });
    // The promise Catch capture Errors
    promise.catch(function(e){
        console.log(e.message);
        $("#login-modal-msg").removeClass("login-success");
        $("#login-modal-msg").addClass("login-error");
        $("#login-modal-msg").text(e.message);
    });

    // $('#login-modal').modal('hide');
});

$("#logout-link").on("click", function(e){
    firebase.auth().signOut();
});

// Authentication Real-Time Listener
firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser){
        // console.log(firebaseUser);
        console.log("Logged In");

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
            poDateTime: $("#poDateTime-input").val().trim(),
            totalPrice: $("#totalPrice-input").val().trim(),
            status: $("#status-input option:selected").val().trim(),
            dateAdded: firebase.database.ServerValue.TIMESTAMP,
        }

        // Code To Push the Data Record to the DataBase
        // database.ref().push(dbPOrecord);

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
