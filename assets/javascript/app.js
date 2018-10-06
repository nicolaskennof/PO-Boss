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
let poIdInput = "";
let zoneInput = "";

// ////////////////////////////
// End Global Variables
// ////////////////////////////

// ////////////////////////////
// Functions
// ////////////////////////////

// Function to Validate the Input Information in the Modal Form
let isAddPOFormValid = function(){
    return true;
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
    });
    // The promise Catch capture Errors
    promise.catch(function(e){
        console.log(e.message);
        $("#login-modal-msg").text(e.message);
    });

    // $('#login-modal').modal('hide');
});

// Fires When #add-po-modal Modal Show Up
// Assign the Form Input Variables 
// Verify that they are Declared in the Global Variables Section
$('#add-po-modal').on('show.bs.modal', function (event) {
    // Add PO Form Inputs
    poIdInput = $("#po-id-input");
    zoneInput = $("#zone-input");
});

// Add PO Information From The Modal
$("#add-po-modal-button").on("click", function(event) {
    // Test Event
    console.log("#add-po-modal-button Clicked");
    // Prevent the default behavior of Form' Submit button
    event.preventDefault();

    console.log(poIdInput.html());

    if(isAddPOFormValid()){
        let dbPOrecord = {
            poId: poIdInput.val().trim(),
            zone: zoneInput.val().trim(),
            dateAdded: firebase.database.ServerValue.TIMESTAMP,
        }

        // Code To Push the Data Record to the DataBase
        database.ref().push(dbPOrecord);

        // Debug
        console.log(dbPOrecord);
        console.log("PO Record Added");
    }
    else{
        console.log("The Form Has Errors!")
    }

});

// Firebase watcher .on("child_added"
database.ref().on("child_added", function(snapshot) {

    let row = $('<tr id="' + snapshot.key + '">');
    row.addClass("row-class");

    let poIdTd = $("<td>");
    poIdTd.text(snapshot.val().poId);

    let zoneTd = $("<td>");
    zoneTd.text(snapshot.val().zone);
 
    console.log()

    row.append(poIdTd);
    row.append(zoneTd);

    row.appendTo(poTable);

    // Handle the errors
}, function(errorObject) {
    console.log("Errors handled: " + errorObject.code);
});

// ////////////////////////////
// End Event Listeners
// ////////////////////////////
