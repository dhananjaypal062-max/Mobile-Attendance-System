// Student Login
function studentLogin() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if (user === "Dhanjay Kumar" && pass === "12345") {
        localStorage.setItem("studentLoggedIn", "yes");
        window.location.href = "student-dashboard.html";
    } else {
        alert("Invalid Login");
    }
}

// Teacher Login
function teacherLogin() {
    let user = document.getElementById("t-username").value;
    let pass = document.getElementById("t-password").value;

    if (user === "teacher" && pass === "admin") {
        localStorage.setItem("teacherLoggedIn", "yes");
        window.location.href = "teacher-dashboard.html";
    } else {
        alert("Invalid Credentials");
    }
}

// Mark Attendance
function markAttendance() {
    let date = new Date().toLocaleDateString();
    let attendance = JSON.parse(localStorage.getItem("attendance")) || [];

    attendance.push({
        date: date,
        status: "Present"
    });

    localStorage.setItem("attendance", JSON.stringify(attendance));

    alert("Attendance Marked Successfully!");
    window.location.href = "student-dashboard.html";
}

// Load Student Attendance
function loadAttendance() {
    let attendance = JSON.parse(localStorage.getItem("attendance")) || [];
    let table = document.getElementById("attendanceTable");

    attendance.forEach(a => {
        table.innerHTML += `
            <tr>
                <td>${a.date}</td>
                <td>${a.status}</td>
            </tr>
        `;
    });
}

// Load Teacher Attendance Records
function loadRecords() {
    let attendance = JSON.parse(localStorage.getItem("attendance")) || [];
    let table = document.getElementById("recordTable");

    attendance.forEach((a, index) => {
        table.innerHTML += `
            <tr>
                <td>Student</td>
                <td>001</td>
                <td>${a.date}</td>
                <td>${a.status}</td>
            </tr>
        `;
    });
}
