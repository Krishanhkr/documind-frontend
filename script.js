// -------------------------------
// DocuMind AI Frontend Script
// Author: Krishan Hkr © 2025
// -------------------------------

// Select elements
const uploadBtn = document.querySelector("button");
const loader = document.getElementById("loader");

// Safety check (in case elements not found)
if (uploadBtn && loader) {
  uploadBtn.addEventListener("click", () => {
    // Show loader animation
    loader.classList.remove("hidden");

    // Simulate AI processing delay
    setTimeout(() => {
      loader.classList.add("hidden");

      // For now, simulate success
      alert("✨ AI Summary ready! (replace with your actual function)");
    }, 3000);
  });
} else {
  console.error("⚠️ Elements not found — check HTML IDs and class names!");
}

// End of Script.js
