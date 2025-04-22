let form = document.forms[0];

form.addEventListener("submit", (e) => {
    e.preventDefault();
  let inputs = document.querySelectorAll("input");

 
  let email = inputs[0].value;
  let password = inputs[1].value;
  
  let admin={
   
    email:email,
    password:password,
    
  }
  let x=fetch("http://localhost:8080/savestudent", 
    {
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(admin)
    });

    console.log(x);
    window.open("./adminlogin.html")
});