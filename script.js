// DocuMind frontend JS — robust, minimal, no errors
// Ensure file is saved as UTF-8 and linked with defer in index.html

const uploadBtn = document.getElementById('uploadBtn');
const fileInput = document.getElementById('fileInput');
const loader = document.getElementById('loader');
const resultBox = document.getElementById('result');

// Safety: ensure elements exist
if (!uploadBtn || !fileInput || !loader || !resultBox) {
  console.error('DOM elements missing: check IDs in index.html');
}

// Hide loader and result initially
loader.classList.add('hidden');
resultBox.style.display = 'none';

// User clicks upload — open file picker
uploadBtn.addEventListener('click', () => {
  fileInput.click();
});

// When user selects a file
fileInput.addEventListener('change', async () => {
  const file = fileInput.files && fileInput.files[0];
  if (!file) return;

  // UI: show loader, hide result, disable button
  loader.classList.remove('hidden');
  resultBox.style.display = 'none';
  uploadBtn.disabled = true;
  uploadBtn.textContent = 'Processing...';

  try {
    // Build form and send to backend if you have an API.
    // For now: simulate network + processing then show a sample result.
    // Replace the below block with actual fetch to your Render backend.

    // Example (if backend exists):
    // const form = new FormData();
    // form.append('file', file);
    // const resp = await fetch('https://documind-ai.onrender.com/analyze', { method: 'POST', body: form });
    // const json = await resp.json();
    // showResult(json.summary);

    // Simulate network delay and sample output (safe offline)
    await new Promise(r => setTimeout(r, 2200));
    const sampleSummary = `• ${file.name} — Summary point 1.\n• Summary point 2.\n• Summary point 3.`;
    showResult(sampleSummary);
  } catch (err) {
    console.error(err);
    showResult('⚠️ Something went wrong while processing the file.');
  } finally {
    // Reset UI
    loader.classList.add('hidden');
    uploadBtn.disabled = false;
    uploadBtn.textContent = 'Upload Document';
    fileInput.value = ''; // allow re-upload same file later
  }
});

function showResult(text) {
  resultBox.style.display = 'block';
  // Convert newlines to <br> safely
  const safeHtml = text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\n/g, '<br>');
  resultBox.innerHTML = `<strong>Summary</strong><div style="margin-top:8px;line-height:1.6">${safeHtml}</div>`;
}
