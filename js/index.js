
// calculate EMI starts


function calEMI(){
    const p = document.getElementById('lamount').value;
    const n = document.getElementById('year').value;
    const r = 10
   
    EMI = (p*n*r)/100;
    document.getElementById('emi').innerHTML = EMI;
   
} 

// // calculate EMI ends
// otp generatio starts

var digit= "0123456789";
var otp ='';
var count = 0;
var num=3;
var name;
var email;

 function display(){
    
    //    event.preventDefault();

             const name = document.getElementById('name').value;
            sessionStorage.setItem("name",name);
            
            const email = document.getElementById('email').value;
            sessionStorage.setItem("email",email);
           
            // otp = Math.ceil(1000 + Math.random() * 10000);
            // sessionStorage.setItem("otp",otp);
            for(let i=1; i<=4 ;i++){
              otp += digit[Math.floor(Math.random()*10)];
               sessionStorage.setItem("otp",otp)

            }

        } 
// otp generatio ends



function getValue(){

        const ot = parseInt(document.getElementById('otp').value);
        const local_otp = parseInt(sessionStorage.getItem("otp"));
        console.log(local_otp)

            if(ot==local_otp)
            {
                // document.getElementById('validate').style.display='none';
                document.getElementById('warn').style.display = "none";
                document.getElementById('success').style.display='flex';
                document.getElementById('validate').style.display = "none";
                document.getElementById('fail').style.display = "none";

            }
            else if (ot!==local_otp && count<2){
                count++;
                num= 3-count;
                document.getElementById('warn').innerHTML = "Enter correct OTP," + " " + num + " " + "attempts left."
                document.getElementById('fail').style.visibility='visible';
            }
            else if (ot != local_otp && count == 2) {
                document.getElementById('warn').style.display = "none";
                document.getElementById('fail').style.display = "flex";
                document.getElementById('success').style.display = "none";
                document.getElementById('validate').style.display = "none";
            }
    }
    // otp validation ends
   
    function clr() {
        document.getElementById('emi').innerHTML = " ";

    }