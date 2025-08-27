const templates = [
  {
    name: "HR Policy Update",
    content: "Please review the updated HR policy at the link below..."
  },
  {
    name: "Fake Invoice",
    content: "Your invoice is overdue. Please click here to pay now."
  }
];

const form = document.getElementById("templateForm");
const table = document.getElementById("templateTable");

function renderTemplates() {
  table.innerHTML = ""; // Clear table
  templates.forEach((template, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${template.name}</td>
      <td>${template.content.substring(0, 50)}...</td>
      <td class="actions">
        <button onclick="editTemplate(${index})">Edit</button>
        <button onclick="deleteTemplate(${index})">Delete</button>
      </td>
    `;

    table.appendChild(row);
  });
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("templateName").value;
  const content = document.getElementById("templateContent").value;

  templates.push({ name, content });
  form.reset();
  renderTemplates();
  alert("✅ Template added!");
});

function deleteTemplate(index) {
  if (confirm("Delete this template?")) {
    templates.splice(index, 1);
    renderTemplates();
  }
}

function editTemplate(index) {
  const t = templates[index];
  document.getElementById("templateName").value = t.name;
  document.getElementById("templateContent").value = t.content;
  templates.splice(index, 1); // Remove original
}

renderTemplates();
