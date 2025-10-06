<script>
    function clearerrors (){
        errors = document.getElementsByClassName('formerror');
        for (let item of errors){
            item.innerHTML= "blank";
        }
            
        
    }
    function seterror (id,error){
        // sets error inside tag of id
        element= document.getElementById(id);
        element.getElementsByClassName('formerror')[0].innerHTML = error ;

    }
    function validateform(){
       var returnval= true;
       clearerrors();
       // perform validation and if validation fails, set the value of returnval to false 
        var name = document.forms['myform']["fname"].value;
        
       
        if (name.length==0){
            seterror("name","length of name can't be zero " );
            returnval = false;
        } 
        if (name.length<5){
            seterror("name","length of name is too short " );
            returnval = false;
        }
        var email = document.forms['myform']["femail"].value;
        
       
        if (email.length>15){
            seterror("email"," Email length is too long " );
            returnval = false;
        } 
        var phone = document.forms['myform']["fphone"].value;
        
       
        if (phone.length!=10){
            seterror("phone"," invalid Phone no.  " );
            returnval = false;
        } 
        var password = document.forms['myform']["fpass"].value;       
        if (password.length>8){
            // create a logic to allow only those password which contain atleast one letter, one number and one special character and one uppercase letter 
            seterror("pass"," Password should be of 8 letters " );
            returnval = false;
        } 
        var cpassword = document.forms['myform']["fcpass"].value;
        
       
        if (cpassword!=password){
            seterror("cpass"," Password and confirm password shoud be match " );
            returnval = false;
        } 

return returnval;
       
    }
    </script>