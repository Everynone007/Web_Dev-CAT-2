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
  let filter = document.getElementById("searchInput").value.toLowerCase();

  let products = document.querySelectorAll(".product-card");

  products.forEach(function (product) {
    let title = product.querySelector("h5").textContent.toLowerCase();

    if (title.includes(filter)) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
}
