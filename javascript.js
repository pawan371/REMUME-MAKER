document.addEventListener("DOMContentLoaded", function () {

    // ===== GENERATE RESUME =====
    const generateBtn = document.getElementById("generationBtn");
    const downloadBtn = document.getElementById("downloadBtn");

    generateBtn.addEventListener("click", function () {

        const form = document.getElementById("resumeForm");
        const data = new FormData(form);

        const preview = document.getElementById("resumePreview");

        preview.innerHTML = `
        <div style="padding:20px;font-family:Arial">
        <h1>${data.get("fullname") || ""}</h1>
        <p>${data.get("email") || ""} | ${data.get("phone") || ""}</p>

        <h3>Objective</h3>
        <p>${data.get("objective") || ""}</p>

        <h3>Education</h3>
        <p>${data.get("degree")} (${data.get("branch")})</p>
        <p>${data.get("college")}</p>

        <h3>Skills</h3>
        <p>${data.get("skills")}</p>

        <h3>Project</h3>
        <p><b>${data.get("projectTitle")}</b></p>
        <p>${data.get("projectDesc")}</p>

        <h3>Experience</h3>
        <p>${data.get("role")} - ${data.get("company")}</p>
        </div>
        `;

    });


    // ===== DOWNLOAD PDF =====
    downloadBtn.addEventListener("click", function () {

        const element = document.getElementById("resumePreview");

        if (!element.innerText.trim()) {
            alert("Generate resume first");
            return;
        }

        const options = {
            margin: 10,
            filename: "resume.pdf",
            html2canvas: { scale: 2 },
            jsPDF: { unit: "mm", format: "a4", orientation: "portrait" }
        };

        html2pdf().set(options).from(element).save();

    });

});