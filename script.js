const uploadBtn = document.getElementById("uploadBtn");
const fileInput = document.getElementById("fileInput");
const resultDiv = document.getElementById("result");

// Replace this URL with your Render backend endpoint:
const API_BASE = "https://documind-ai.onrender.com";

uploadBtn.addEventListener("click", async () => {
  const file = fileInput.files[0];
  if (!file) return alert("Please select a PDF file first!");

  const formData = new FormData();
  formData.append("file", file);

  resultDiv.innerHTML = "<p>⏳ Processing your PDF...</p>";

  try {
    const res = await fetch(`${API_BASE}/upload`, {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    resultDiv.innerHTML = `<h3>📄 Summary:</h3><p>${data.summary}</p>`;
  } catch (err) {
    console.error(err);
    resultDiv.innerHTML = "<p style='color:red'>❌ Error: Could not generate summary.</p>";
  }
});
