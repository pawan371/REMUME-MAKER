// ================= GENERATE RESUME =================
document.getElementById("generationBtn").addEventListener("click", function () {

    const form = document.getElementById("resumeForm");
    const formData = new FormData(form);

    const fullName = formData.get("fullname");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const linkedin = formData.get("linkedin");
    const github = formData.get("github");
    const objective = formData.get("objective");
    const skills = formData.get("skills");
    const degree = formData.get("degree");
    const branch = formData.get("branch");
    const college = formData.get("college");
    const gradStart = formData.get("gradstartYear");
    const gradEnd = formData.get("gradendYear");
    const gradPercentage = formData.get("gradpercentage");

    const company = formData.get("company");
    const role = formData.get("role");
    const duration = formData.get("duration");

    const projectTitle = formData.get("projectTitle");
    const projectLink = formData.get("projectLink");
    const projectDesc = formData.get("projectDesc");

    const photo = formData.get("photo");
    const preview = document.getElementById("resumePreview");

    let photoURL = "";
    if (photo && photo.size > 0) {
        photoURL = URL.createObjectURL(photo);
    }

    preview.innerHTML = `
        <div style="text-align:center;">
            ${photoURL ? `<img src="${photoURL}" width="120" style="border-radius:50%;">` : ""}
            <h2>${fullName}</h2>
            <p>${email} | ${phone}</p>
            <p>
                <a href="${linkedin}" target="_blank">LinkedIn</a> |
                <a href="${github}" target="_blank">GitHub</a>
            </p>
        </div>

        <hr>

        <h3>Career Objective</h3>
        <p>${objective}</p>

        <h3>Education</h3>
        <p><strong>${degree} (${branch})</strong></p>
        <p>${college} (${gradStart} - ${gradEnd})</p>
        <p>Percentage: ${gradPercentage}%</p>

        <h3>Skills</h3>
        <p>${skills}</p>

        <h3>Projects</h3>
        <p><strong>${projectTitle}</strong></p>
        <p><a href="${projectLink}" target="_blank">${projectLink}</a></p>
        <p>${projectDesc}</p>

        <h3>Work Experience</h3>
        <p><strong>${role}</strong> - ${company}</p>
        <p>${duration}</p>
    `;
});


// ================= AI OBJECTIVE =================
document.getElementById("aiObjectiveBtn").addEventListener("click", function () {

    const degree = document.querySelector("input[name='degree']").value;
    const skills = document.querySelector("textarea[name='skills']").value;

    const objectiveText =
        `Enthusiastic ${degree} graduate with strong knowledge of ${skills}. 
        Seeking an opportunity to apply technical skills in a growth-oriented organization.`;

    document.querySelector("textarea[name='objective']").value = objectiveText;
});


// ================= ENHANCE SKILLS =================
document.getElementById("improveSkillsBtn").addEventListener("click", function () {

    const skillsInput = document.querySelector("textarea[name='skills']");
    const skills = skillsInput.value;

    const improved =
        `Proficient in ${skills}. Experienced in applying these technologies to develop efficient, scalable, and optimized solutions.`;

    skillsInput.value = improved;
});


// ================= SMART AI RESUME SCORE =================
function calculateResumeScore() {

    let score = 0;

    const skills = document.querySelector("textarea[name='skills']").value.trim();
    const objective = document.querySelector("textarea[name='objective']").value.trim();
    const projectDesc = document.querySelector("textarea[name='projectDesc']").value.trim();
    const degree = document.querySelector("input[name='degree']").value.trim();

    if (skills.length > 30) score += 25;
    if (objective.length > 40) score += 25;
    if (projectDesc.length > 60) score += 25;
    if (degree !== "") score += 25;

    alert("🔥 AI Resume Score: " + score + "/100");
}


// ================= AI SUGGESTIONS =================
function getAISuggestions() {

    const skills = document.querySelector("textarea[name='skills']").value;
    const objective = document.querySelector("textarea[name='objective']").value;
    const projectDesc = document.querySelector("textarea[name='projectDesc']").value;

    let suggestions = "";

    if (skills.length < 30) {
        suggestions += "• Add more technical skills.\n";
    }
    if (objective.length < 40) {
        suggestions += "• Improve your career objective.\n";
    }
    if (projectDesc.length < 50) {
        suggestions += "• Add more details to project description.\n";
    }

    if (suggestions === "") {
        suggestions = "✅ Your resume looks strong!";
    }

    alert(suggestions);
}


// ================= ATS KEYWORD OPTIMIZER =================
function optimizeForATS() {

    const jobRole = document.getElementById("jobRoleInput").value.toLowerCase();
    const skillsInput = document.querySelector("textarea[name='skills']");

    if (jobRole.includes("developer")) {
        skillsInput.value += ", Problem Solving, Data Structures, Algorithms, OOPS, Git, REST API";
    }
    else if (jobRole.includes("data")) {
        skillsInput.value += ", Python, Machine Learning, Pandas, NumPy, Data Visualization";
    }
    else if (jobRole.includes("java")) {
        skillsInput.value += ", Core Java, JDBC, Servlets, Multithreading, Spring Boot";
    }

    alert("✅ ATS Keywords Added Successfully!");
}


// ================= TEMPLATE SWITCHER =================
function applyTemplate() {

    const template = document.getElementById("templateSelector").value;
    const preview = document.getElementById("resumePreview");

    if (template === "professional") {
        preview.style.background = "#f4f4f4";
        preview.style.fontFamily = "Georgia";
        preview.style.color = "black";
    }
    else if (template === "minimal") {
        preview.style.background = "white";
        preview.style.fontFamily = "Arial";
        preview.style.color = "black";
    }
    else {
        preview.style.background = "linear-gradient(to right, #667eea, #764ba2)";
        preview.style.color = "white";
        preview.style.fontFamily = "sans-serif";
    }
}


// ================= DOWNLOAD PDF =================
document.getElementById("downloadBtn").addEventListener("click", function () {

    const element = document.getElementById("resumePreview");
    html2pdf().from(element).save("My_Resume.pdf");
});

// ===== Logo Animation Controller =====
document.addEventListener("DOMContentLoaded", function () {

    const logo = document.getElementById("mainLogo");

    // Add glow after page loads
    setTimeout(() => {
        logo.classList.add("glow");
    }, 1000);

    // Bounce effect on click
    logo.addEventListener("click", () => {
        logo.classList.remove("bounce");
        void logo.offsetWidth; // restart animation
        logo.classList.add("bounce");
    });

});