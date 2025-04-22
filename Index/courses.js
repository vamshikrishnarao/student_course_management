let coursesContainer = document.getElementById("coursesContainer");
let sid              = localStorage.getItem("id");

  // Fetch and show all available courses
fetch("http://localhost:8080/fetchcourse")
    .then(response => response.json())
    .then(res => {
        console.log(res.data);
        res.data.forEach(obj => {
            coursesContainer.innerHTML += `
                <div class = "course">
                    <h2><span>${obj.cid}</span>. ${obj.cname}</h2>
                    <p>${obj.duration}</p>
                    <p>Cost: <b>${obj.cost}</b> Rs/-</p>
                    <button onclick = "fetchCourses(${obj.cid})">ADD</button>
                </div>
            `;
        });
    });

  // Check if course already exists, then add
function fetchCourses(cid) {
    console.log("Student ID:", sid);

    fetch(`http://localhost:8080/fetchcourses/${sid}`)
        .then(response => {
            if (!response.ok) {
                console.warn("No course yet or error:", response.status);
                addCourse(cid);
                return null;
            }
            return response.json();
        })
        .then(res => {
            if (!res) return;

            console.log("Response from backend:", res);

            if (Array.isArray(res.data)) {
                let alreadyExists = res.data.some(obj => obj.cid === cid);
                console.log("Already Exists:", alreadyExists);

                if (alreadyExists) {
                    alert("Course already present");
                } else {
                    addCourse(cid);
                }
            } else {
                console.warn("Unexpected data format:", res);
                addCourse(cid);
            }
        })
        .catch(err => {
            console.error("Fetch failed:", err);
            addCourse(cid);
        });
}

  // Add course to student
function addCourse(cid) {
    console.log("Adding Course:", cid, "for Student:", sid);

    fetch(`http://localhost:8080/addcourse/${sid}/${cid}`, {
        method: "PUT"
    })
    .then(response => response.json())
    .then(res => {
        alert(res.msg);
    })
    .catch(err => {
        console.error("Error adding course:", err);
        alert("Failed to add course.");
    });
}
