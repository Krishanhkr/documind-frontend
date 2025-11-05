// ---------------------------
// DOCUMIND AI FRONTEND SCRIPT
// ---------------------------

// Select DOM elements
const fileInput = document.getElementById("file-input");
const uploadBtn = document.getElementById("upload-btn");
const resultDiv = document.getElementById("result");
const loader = document.querySelector(".loader");
const loaderText = document.querySelector(".loader-text");

// Function to show rotating loader
function showLoader(show = true) {
  if (show) {
    loader.style.display = "flex";
    loaderText.textContent = "🤖 AI is thinking...";
  } else {
    loader.style.display = "none";
    loaderText.textContent = "";
  }
}

// Function to display result summary
function showResult(text) {
  resultDiv.style.opacity = "0";
  setTimeout(() => {
    resultDiv.innerHTML = `<h3>📄 Summary</h3><p>${text}</p>`;
    resultDiv.style.opacity = "1";
  }, 300);
}

// Handle file upload + backend request
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
    // ⚙️ Backend endpoint (Render)
    const response = await fetch("https://documind-backend-2.onrender.com/analyze", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`Server responded with ${response.status}`);
    }

    const data = await response.json();
    showLoader(false);

    if (data.summary) {
      showResult(data.summary);
    } else {
      showResult("⚠️ No summary generated. Try again with a longer document.");
    }
  } catch (error) {
    console.error("Error:", error);
    showLoader(false);
    showResult("❌ Backend error: " + error.message);
  }
}

// Event listeners
uploadBtn.addEventListener("click", handleFileUpload);
fileInput.addEventListener("change", () => {
  if (fileInput.files.length > 0) {
    uploadBtn.textContent = "Summarize Now 🚀";
  } else {
    uploadBtn.textContent = "Upload PDF";
  }
});

// Smooth fade-in animations for page load
document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("loaded");
});
