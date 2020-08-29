// Main Calculate
function calculate(){
    var b = document.getElementById('billinput').value;
    var bill = Number(b);
    var radio;
    // Method 1
    // if(document.getElementById('r25').checked){
    //     radio = document.getElementById('r25').value;
    //     console.log(radio);
    // }
    // else if(document.getElementById('r15').checked){
    //     radio = document.getElementById('r15').value;
    //     console.log(radio);
    // }
    // else if(document.getElementById('r10').checked){
    //     radio = document.getElementById('r10').value;
    //     console.log(radio);
    // }
    // else{
    //     console.log('Error');
    // }

    // Method 2
    radio = document.querySelector('input[name = "tl"]:checked').value;

    var total = tipCal(bill, radio);

    document.getElementById('total').value = total;

    // Change Color
    // document.getElementsByClassName('calculator')[0].style.backgroundColor = "green";
    document.querySelector(".calculator").style.backgroundColor = "green";
}

// Tip Calculate
function tipCal(bill , radio){
    var tipVal = radio / 100;
    var answer = tipVal * bill;
    return answer;
}
