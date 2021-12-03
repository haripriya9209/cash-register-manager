
const bill_amount = document.querySelector("#bill-Amount");
const given_amount = document.querySelector("#cash-Given");
const next_1 =document.querySelector("#next1");
const next_2 = document.querySelector("#next2");
const error_1 = document.querySelector("#error1");
const error_2 = document.querySelector("#error2");
const sec_1 = document.querySelector("#sec1");
const sec_2 = document.querySelector("#sec2");
const banner = document.querySelector("#banner");
const availabe_notes = [2000, 500, 100, 20, 10, 5, 1];
const note_number = document.querySelectorAll(".notes");
var denomination =[];
console.log(note_number[0].innerHTML);

//taking and validating of bill amount
next_1.addEventListener("click", ()=>{

    const bill_value = bill_amount.value;

    if(bill_value=="" || bill_value<=0){
        error_1.classList.remove("hide");
        error_1.innerHTML = "Please enter valid billed amount";
    }

    else{
        error_1.classList.add("hide");
        sec_1.classList.remove("hide1");
    }
})

//taking and validating of paid amount
next_2.addEventListener("click",()=>{

    var bill_value = parseInt(bill_amount.value);
    var paid_value = parseInt(given_amount.value);
    
    if(isNaN(paid_value) || paid_value < bill_value){
        error_2.classList.remove("hide");
        error_2.innerHTML = "Please enter valid received amount";
    }
    
    else{
        error_2.classList.add("hide");
        sec_2.classList.remove("hide2");
        const calculated_amount = given_amount.value - bill_amount.value;
        calculateChange(calculated_amount);
    }
    
})

//logic for calculating the change
const calculateChange =(calculated_amount)=>{
    for(var i=0; i<availabe_notes.length; i++){
        const remaining = Math.trunc(calculated_amount / availabe_notes[i]);
        const diff = calculated_amount % availabe_notes[i];
        denomination[i] = remaining;
        calculated_amount = diff;
        if(denomination[i]!=0){
            note_number[i].innerHTML =  denomination[i];
        }
        
    }
    
}