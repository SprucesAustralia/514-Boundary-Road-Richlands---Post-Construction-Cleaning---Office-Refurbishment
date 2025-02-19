document.addEventListener("DOMContentLoaded", () => {
  // 1. Menu Toggle for Mobile
  const menuToggle = document.querySelector(".menu-toggle");
  const navUl = document.querySelector(".main-nav ul");

  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      navUl.classList.toggle("show");
    });
  }

  // 2. Image Preview for each file input in the Final Inspection Checklist
  const fileInputs = document.querySelectorAll('input[type="file"]');
  fileInputs.forEach((input) => {
    input.addEventListener("change", (event) => {
      const file = event.target.files[0];
      const previewImg = input.nextElementSibling; // the <img class="preview"> next to the file input

      if (file && previewImg) {
        const reader = new FileReader();
        reader.onload = function (e) {
          previewImg.src = e.target.result;
          previewImg.style.display = "block";
          previewImg.style.width = "100px"; // or adjust as needed
          previewImg.style.height = "auto";
        };
        reader.readAsDataURL(file);
      } else if (previewImg) {
        previewImg.style.display = "none";
      }
    });
  });
});
