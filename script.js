const themeBtn = document.getElementById("themeBtn");
themeBtn.onclick = () => {
    document.body.classList.toggle("dark-mode");
};

const editJobBtn = document.getElementById("editJobBtn");
const jobTitle = document.getElementById("jobTitle");

editJobBtn.onclick = () => {
    const newTitle = prompt("Enter new job title:");
    if (newTitle) {
        jobTitle.textContent = newTitle;
    }
};

const toggleSkillsBtn = document.getElementById("toggleSkillsBtn");
const skillsSection = document.getElementById("skillsSection");

toggleSkillsBtn.onclick = () => {
    if (skillsSection.style.display === "none") {
        skillsSection.style.display = "block";
        toggleSkillsBtn.textContent = "Hide Skills";
    } else {
        skillsSection.style.display = "none";
        toggleSkillsBtn.textContent = "Show Skills";
    }
};

const msgBox = document.getElementById("msgBox");
const counter = document.getElementById("counter");

msgBox.onkeyup = () => {
    const remaining = 200 - msgBox.value.length;
    counter.textContent = remaining;
};

function validateForm() {
    const name = document.getElementById("nameField").value;
    const email = document.getElementById("emailField").value;

    if (name === "" || email === "") {
        alert("Please fill in Name and Email.");
        return false;
    }
    alert("Message sent successfully!");
    return true;
}

const dateDisplay = document.getElementById("dateDisplay");
const today = new Date().toDateString();
dateDisplay.textContent = "Today is: " + today;

const hour = new Date().getHours();
let greeting = "Hello!";

if (hour < 12) greeting = "Good morning!";
else if (hour < 18) greeting = "Good afternoon!";
else greeting = "Good evening!";

alert(greeting + " Welcome to my profile.");
