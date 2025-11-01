// --------------------------------------
// DocuMind AI | Frontend Interaction JS
// Author: Krishan Hkr © 2025
// --------------------------------------

const uploadBtn = document.getElementById("uploadBtn");
const fileInput = document.getElementById("fileInput");
const loader = document.getElementById("loader");

// Hide loader initially
loader.classList.add("hidden");

// Button click => trigger file input
uploadBtn.addEventListener("click", () => fileInput.click());

// When user selects a file
fileInput.addEventListener("change", () => {
  if (fileInput.files.length > 0) {
    // Show rotating loader
    loader.classList.remove("hidden");
    uploadBtn.disabled = true;
    uploadBtn.textContent = "Processing...";

    // Simulate AI summarization
    setTimeout(() => {
      loader.classList.add("hidden");
      uploadBtn.disabled = false;
      uploadBtn.textContent = "Upload Document";
      alert(`✨ AI Summary ready for: ${fileInput.files[0].name}`);
      fileInput.value = ""; // reset
    }, 3500);
  }
});
