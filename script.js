const checkbox = document.getElementById("checkbox");
const MasterCard= document.getElementById("MasterCard");
const CreditCard = document.getElementById("CreditCard");
const PayPakCard = document.getElementById("PayPakCard");
const mysubmit = document.getElementById("mysubmit");

const Result = document.getElementById("Result");
const PaymentResult = document.getElementById("PaymentResult");
 
mysubmit.onclick= function(){
    if(checkbox.checked){
       PaymentResult.textContent ="Congrats! You are Subscribed";
    }
    else {
    PaymentResult.textContent = "Sorry!! You are not Subscribed!";
    }
     if(MasterCard.checked){
        Result.textContent="You have choose MasterCard";
    }
    else if(CreditCard.checked){
        Result.textContent="You have selected CreditCard";
    }
    else   if(PayPakCard.checked){
        Result.textContent="You have selected PayPakCard";
    }
    else{
         Result.textContent="Please Choose a Card";
    }
}