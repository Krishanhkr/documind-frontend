// ---------------------------
// DOCUMIND AI FRONTEND SCRIPT
// ---------------------------

// Selecting HTML elements (IDs matched with your HTML)
const fileInput = document.getElementById("fileInput");
const uploadBtn = document.getElementById("uploadBtn");
const loader = document.getElementById("loader");
const loaderText = document.querySelector(".loader-text");
const resultDiv = document.getElementById("result");

// Function: Show/Hide loader
function showLoader(show = true) {
  if (show) {
    loader.classList.remove("hidden");
    loaderText.textContent = "🤖 AI is thinking...";
  } else {
    loader.classList.add("hidden");
    loaderText.textContent = "";
  }
}

// Function: Show summary result
function showResult(text) {
  resultDiv.style.opacity = "0";
  setTimeout(() => {
    resultDiv.innerHTML = `<h3>📄 Summary:</h3><p>${text}</p>`;
    resultDiv.style.opacity = "1";
  }, 300);
}

// Function: Handle file upload & backend request
async function handleFileUpload() {
  const file = fileInput.files[0];
  if (!file) {
    alert("Please select a PDF file first.");
    return;
  }

  showLoader(true);
  resultDiv.innerHTML = "";

  const formData = new FormData();
  formData.append("file", file);

  try {
    const response = await fetch("https://documind-backend-2.onrender.com/analyze", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) throw new Error(`Server responded with ${response.status}`);

    const data = await response.json();
    showLoader(false);

    if (data.summary) {
      showResult(data.summary);
    } else {
      showResult("⚠️ No summary generated. Try again with another document.");
    }
  } catch (error) {
    console.error("Error:", error);
    showLoader(false);
    showResult("❌ Backend error: " + error.message);
  }
}

// Event: Click on Upload Button
uploadBtn.addEventListener("click", () => fileInput.click());

// Event: When file is selected
fileInput.addEventListener("change", handleFileUpload);

// Fade-in animation after DOM loads
document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("loaded");
});
