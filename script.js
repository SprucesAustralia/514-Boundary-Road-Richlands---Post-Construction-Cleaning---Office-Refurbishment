document.addEventListener("DOMContentLoaded", () => {
  // Example: Show filename next to each file input
  const fileInputs = document.querySelectorAll('input[type="file"]');
  fileInputs.forEach(input => {
    input.addEventListener("change", (e) => {
      const fileName = e.target.files[0] ? e.target.files[0].name : "No file chosen";
      alert(`Selected file: ${fileName}`);
      // Or update the UI in some other way...
    });
  });
});
