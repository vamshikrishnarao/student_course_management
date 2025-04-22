let fname        = localStorage.getItem("fname");
let lname        = localStorage.getItem("lname");
let email        = localStorage.getItem("email");
let id           = localStorage.getItem("id");
let mobileNumber      = localStorage.getItem("mobileNumber");
let address = localStorage.getItem("address");
let password     = localStorage.getItem("password");

let fnameInput = document.getElementById("fnameInput");
let lnameInput = document.getElementById("lnameInput");
let emailInput = document.getElementById("emailInput");
let idInput    = document.getElementById("idInput");

let addressInput      = document.getElementById("addressInput");
let mobileNumberInput = document.getElementById("mobileNumberInput");
 let passwordInput     = document.getElementById("passwordInput");


 fnameInput.value        = fname;
 lnameInput.value        = lname;
 emailInput.value        = email;
 idInput.value           = id;
 addressInput.value      = address;
 mobileNumberInput.value = mobileNumber;
 passwordInput.value     = password;

 let updateBtn = document.getElementById("updateBtn");
 updateBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    let student={
        id          : idInput.value,
        fname       : fnameInput.value,
        lname       : lnameInput.value,
        email       : emailInput.value,
        password    : passwordInput.value,
        mobileNumber: mobileNumberInput.value,
        address: addressInput.value
    }
    console.log(student);

    let x=fetch("http://localhost:8080/updatestudent",{
        method: "PUT",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify(student)
       

    })
    console.log(x);
    x.then(res=>res.json())
    .then(res=>{
        console.log(res.data);
        localStorage.setItem("id",res.data.id);
        localStorage.setItem("fname",res.data.fname);
        localStorage.setItem("lname",res.data.lname);
        localStorage.setItem("email",res.data.email);
        localStorage.setItem("password",res.data.password);
        localStorage.setItem("mobileNumber",res.data.mobileNumber);
        localStorage.setItem("address",res.data.address);
        alert("Student updated successfully");
        window.open("./profile.html")
    })
 })
