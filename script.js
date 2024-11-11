// Sample Project Data
const projects = [
  {
    title: "Project 1",
    description: "A description of your first project.",
    imageUrl: "project1.jpg",
    link: "https://example.com"
  },
  {
    title: "Monteia",
    description: "A description of your second project.",
    imageUrl: "project2.jpg",
    link: "https://example.com"
  },
  // Add more project objects here
];

// Get the project container element
const projectContainer = document.querySelector(".project-container");

// Loop through the project data and create HTML for each project
projects.forEach(project => {
  // Create a div for each project
  const projectDiv = document.createElement("div");
  projectDiv.classList.add("project");

  // Create an image element
  const img = document.createElement("img");
  img.src = project.imageUrl;
  img.alt = project.title;

  // Create a heading for the project title
  const title = document.createElement("h3");
  title.textContent = project.title;

  // Create a paragraph for the project description
  const description = document.createElement("p");
  description.textContent = project.description;

  // Create a link to the project
  const link = document.createElement("a");
  link.href = project.link;
  link.textContent = "View Project";

  // Append the elements to the project div
  projectDiv.appendChild(img);
  projectDiv.appendChild(title);
  projectDiv.appendChild(description);
  projectDiv.appendChild(link);

  // Append the project div to the project container
  projectContainer.appendChild(projectDiv);
});