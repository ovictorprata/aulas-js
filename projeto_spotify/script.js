// Open modal
document.getElementById("openModalBtn").addEventListener("click", function () {
  document.getElementById("addTrackModal").style.display = "flex";
});

// Close modal
document.getElementById("closeModalBtn").addEventListener("click", function () {
  document.getElementById("addTrackModal").style.display = "none";
});

// Close modal when clicking outside of modal content
window.addEventListener("click", function (event) {
  if (event.target === document.getElementById("addTrackModal")) {
    document.getElementById("addTrackModal").style.display = "none";
  }
});
