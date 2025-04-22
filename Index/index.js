let login=document.getElementById("login");
let logout = document.getElementById("logout");

  // Check if the user is logged in
if (localStorage.getItem("id") === null) {
    logout.style.display = "none";  // Hide logout button if not logged in
   
} else {
    login.style.display     = "none";  // Hide login button if logged in
   
    
}

  // Logout functionality
  logout.addEventListener("click", ()=> {
    localStorage.clear();  // Clear user session
    window.close()
    // window.location.href = "../Login/login.html"; // Redirect to login page
});

let profile = document.getElementById("profile")
profile.addEventListener("click", ()=> {
    let id = localStorage.getItem("id");
    console.log("id is "+id)
    if(id==null){
        alert("please login")
    }else{
        window.open("./profile.html")
    }
})

login.addEventListener("click",()=>{
    window.open("../Login/login.html")
})
