let fname        = localStorage.getItem("fname");
let lname        = localStorage.getItem("lname");
let email        = localStorage.getItem("email");
let id           = localStorage.getItem("id");
let mobileNumber = localStorage.getItem("mobileNumber");
let address      = localStorage.getItem("address");
let password     = localStorage.getItem("password");

let profile           = document.getElementById("profile");
profile.innerHTML = `

<tr>
  <td>First Name: </td>
  <td>${fname}</td>
</tr>
<tr>
  <td>Last Name: </td>
  <td>${lname}</td>
</tr>
<tr>
  <td>Email: </td>
  <td>${email}</td>
</tr>
<tr>
  <td>Address: </td>
  <td>${address}</td>
</tr>
<tr>
  <td>Mobile Number: </td>
  <td>${mobileNumber}</td>
</tr>
`;

  // delete 
  // let deletebtn = document.getElementById("deletebtn");
  // deletebtn.addEventListener("click", function () {
  //   fetch(http://localhost:8080/deletestudent/${id}, {  // Use backticks here
  //     method : "DELETE",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then(response => {
  //       if (!response.ok) {
  //         throw new Error("Failed to delete student");
  //       }
  //       return response.json();
  //     })
  //     .then(data => {
  //       alert("Deleted successfully!");
  //       localStorage.clear  ();                        // Clear local storage after deletion
  //       window.location.href = "../Login/login.html";  // Use location.href instead of window.open
  //     })
  //     .catch(error => {
  //       console.error("Error:", error);
  //       alert("Failed to delete the student");
  //     });



// Fetch and display image
fetch(`http://localhost:8080/fetchImage/${id}`)
  .then(response => {
    if (!response.ok) {
      throw new Error("Failed to fetch image");
    }
    return response.blob();
  })
  .then(blob => {
    let imageUrl = URL.createObjectURL(blob); // Use 'URL' (capital U)
    document.getElementById("pic").src = imageUrl;
  })
  .catch(error => {
    console.error("Error fetching image:", error);
  });

  // upload image 

  uploadimg.addEventListener("click",()=>{
    let file = fileInput.files[0];

// clg(file);

let formData = new FormData();
formData.append("id",id);
formData.append("file",file);



  })


// Function to fetch and display the user's image
async function fetchAndDisplayImage(id) {
    try {
        let response = await fetch(`http://localhost:8080/fetchImage/${sid}`);
        
        if (!response.ok) {
            throw new Error("Failed to fetch image");
        }

        let blob = await response.blob();
        let imageUrl = URL.createObjectURL(blob);
        document.getElementById("pic").src = imageUrl;
    } catch (error) {
        console.error("Error fetching image:", error);
    }
}

// Fetch image on page load
document.addEventListener("DOMContentLoaded", () => {
    let id = localStorage.getItem("id");
    if (id) {
        fetchAndDisplayImage(id);
    }
});

 