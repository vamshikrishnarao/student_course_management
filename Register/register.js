let form = document.forms[0];

form.addEventListener("submit", (e) => {
    e.preventDefault();
  let inputs = document.querySelectorAll("input");

  let fname        = inputs[0].value;
  let lname        = inputs[1].value;
  let email        = inputs[2].value;
  let password     = inputs[3].value;
  let mobileNumber = inputs[4].value;
  let address      = inputs[5].value;

  let student={
    fname       : fname,
    lname       : lname,
    email       : email,
    password    : password,
    mobileNumber: mobileNumber,
    address     : address

  }
  console.log(fname,lname,email,password,mobileNumber,address);
  let x=fetch("http://localhost:8080/savestudent", 
    {
        method : "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(student)
    });

    console.log(x);
    window.open("../Login/login.html")
});