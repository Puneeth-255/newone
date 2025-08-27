const form = document.getElementById("assignForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  alert("✅ Training assigned (demo only)");
  form.reset();
});
