// External JS - Second Session
// Function to change button conetent
function doClick(id){
    id.innerHTML = "You Clicked It!";
}

// For change Heading
function changeHeading(){
    var heading = document.getElementById('hd');
    heading.innerHTML = "You have changed it!";
}

// Show Date
function showDate(){
    var date = document.getElementById('date');
    date.innerHTML = Date();
}

// Clear Date
function clearDate(){
    var date = document.getElementById('date');
    date.innerHTML = '';
}

// Greetings
function greetings(){
    var greet = document.getElementById('welcome');
    greet.innerHTML = "Welcome to the Course!";
}

// Change Body Background and Heading Color
function changeBg(x){
    console.log(x.value);
    var body = document.getElementById('bd');
    body.style.backgroundColor = x.value;
    
    var heading = document.getElementById('hd');
    if(x.value == "white"){
        heading.style.color = "black";
    }
    else{
        heading.style.color = "white";
    }
}

// For form validation using Names 
function validate(){
    var fname = document.forms["myform"]["firstName"].value;
    var lname = document.forms["myform"]["lastName"].value;
    if(fname == null || fname == ""){
        alert("First Name is Required!");
        return false;
    }
    else if(lname == null || lname == ""){
        alert("Last Name is Required!");
        return false;
    }
    else{
        return true;
    }
    
}