let mycoursesContainer = document.getElementById("my_courese_container");
let sid                = localStorage.getItem("id");
console.log("Student ID:", sid);

  // Fetch and display enrolled courses
fetch(`http://localhost:8080/fetchcourses/${sid}`)
    .then(response => response.json())
    .then(res => {
        console.log(res.data);
        res.data.forEach(obj => {
            mycoursesContainer.innerHTML += `
                <div class = "course">
                    <h2><span>${obj.cid}</span>. ${obj.cname}</h2>
                    <p>Duration - ${obj.duration}</p>
                    <p>Cost: <b>${obj.cost}</b> Rs/-</p>
                    <button onclick = "deleteCourse(${obj.cid})">Delete</button>
                </div>
            `;
        });
    })
    .catch(err => {
        console.error("Failed to fetch courses:", err);
    });

  // Delete course
function deleteCourse(cid) {
    console.log("Deleting Course ID:", cid);

    fetch(`http://localhost:8080/deletecourse/${sid}/${cid}`, {
        method: "DELETE"
    })
    .then(response => response.json())
    .then(res => {
        alert(res.msg);
        location.reload();
    })
    .catch(err => {
        console.error("Failed to delete course:", err);
        alert("Failed to delete course.");
    });
}
