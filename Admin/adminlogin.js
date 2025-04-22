let form = document.forms[0]

form.addEventListener("submit", (e) => {
    e.preventDefault();
  let inputs = document.querySelectorAll("input");

 
  let email = inputs[0].value;
  let password = inputs[1].value;
  
  let adminlogin={
   
    email:email,
    password:password,
    
  }
  let x=fetch("http://localhost:8080/loginadmin", 
    {
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(adminlogin)
    });

    console.log(x);
    window.open("../Login/login.html")
});