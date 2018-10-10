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

        $("#main-container").show(1000);
        $("#navbar-menu-auth").show();

        $("#welcome-container").hide(1000);
        $("#navbar-menu-noauth").hide();
    }
    else{
        console.log("Not Logged In");

        $("#main-container").hide(1000);
        $("#navbar-menu-auth").hide();

        $("#welcome-container").show(1000);
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
$('#add-po-modal').on('show.bs.modal', function (event) {
    // Add PO Form Inputs
});

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
        database.ref().push(dbPOrecord);

        // Debug
        console.log(dbPOrecord);
        console.log("PO Record Added");
    }
    else{
        console.log("The Form Has Errors!")
    }

});

// Clears all of the text-boxes
$("#zone-input").val("");
$("#po-id-input").val("");
$("#price-input").val("");

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

// ////////////////////////////
// End Event Listeners
// ////////////////////////////
