

function testLength(value, length){  //Function works and is complete
  

   if(value == length){
       return true;
   }
   else{
       return false;
   }
} //testLength


function testNumber(value){      //Function works and is complete
	
	if(isNaN(value)){  //if not a number
        return false;
    }
    else{              //if a number
        return true;
    }
	
}//end testNumber

function validateControl(control, name, length){ //Function works and is complete
    con_len = control.length;
    
	 if(testLength(con_len,length) == false){
         alert(name+" is the incorrect length. Please type again.");
         return false;
     }
     if((testLength(con_len,length) == true) && (testNumber(control) == false)){
        alert(name+" is not a number. Please type again.");
        return false;
     }
     else{
         return true;
     }
     
	
} //end validateControl

function validateCreditCard(value) {    //Function works and is complete
	let number = value.replace(/ /g,'');  //remove whitespace
    let firstnumber = number[0];        //obtain first number
   
      if(testNumber(number) == false){
          alert("Card Number field is not a valid number. Please type again.");
          return false;
      }//end first if
      else{
          if((firstnumber == 3 && testLength(number.length,15) == true) || (firstnumber == 4 && testLength(number.length,16) == true) || (firstnumber == 5 && testLength(number.length,16) == true) || (firstnumber == 6 && testLength(number.length,16) == true)){ 
             return true;
            }
             else{
                 alert("Card Number is incorrect number/length. Please try again."); 
                 return false;
             }
          }//end second if
     
    	
} //end validateCreditCard

function validateDate(value) {                   //Function works and is complete
const today = new Date();
const userselect = new Date(value) ;
userselect.setMonth(userselect.getMonth()+1);


 if(userselect > today){
     return true;
 }
 else{
     alert("The Expiration Date you have chosen is invalid. Please try again. \nFormat should be: Year-Month ex. 2021-12");
     return false;
 }

}//end validateDate

function validateEmail(value){ //Function works and is complete
	
	const reg = /([a-z\d\-\.\+\/\!\%]+)@([a-z\d\-]+)\.([a-z]+).?([a-z]+)?$/i;
	
    
    if(reg.test(value) == true){   //if it passes and is a valid email
        return true;
    }
    else{
        alert("Email Address is incorrect. Please try again.");
        return false;
    }


}//end validateEmail

function validateForm(){                 
    

    if((validateControl(document.getElementById("zip").value, "Zip", 5) == true)
    &&
    (validateControl(document.getElementById("cvc").value, "CVV2/CVC", 3) == true)
    &&
    (validateDate(document.getElementById("exp").value) == true)
    &&
    (validateCreditCard(document.getElementById("cardnumber").value) == true)
    &&
    (validateEmail(document.getElementById("email").value) == true)
    &&
    (validateState(document.getElementById("state").value) == true)){
        alert("Payment Submitted");
    }
    
    return false;
    
    
}// end validateForm


function validateState(value){  //Function works and is complete
	
    if(value > 0){
        return true;
    }
    else{
        alert("Please select a valid state");
        return false;
    }
	
}//end validateState


