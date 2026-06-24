// Contact Form Validation

const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
      alert("Please fill in all fields.");
      event.preventDefault();
    }
  });
}

// Dark Mode

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
}

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
}

function filterProducts() {
  let input = document.getElementById("searchInput");

  if (!input) return;

  let filter = input.value.toLowerCase();

  let products = document.getElementsByClassName("product-card");

  for (let i = 0; i < products.length; i++) {
    let text = products[i].textContent.toLowerCase();

    if (text.includes(filter)) {
      products[i].style.display = "";
    } else {
      products[i].style.display = "none";
    }
  }
}
