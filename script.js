// MOBILE NAV TOGGLE
const navToggle = document.querySelector(".nav-toggle");
const mobileNav = document.querySelector(".nav");

if (navToggle && mobileNav) {
  navToggle.addEventListener("click", () => {
    mobileNav.classList.toggle("open");
  });

  mobileNav.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      mobileNav.classList.remove("open");
    }
  });
}

// HEADER HIDE/SHOW ON SCROLL (BOTH MOBILE & DESKTOP)
let lastScrollY = window.scrollY;
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (!header) return;
  const currentY = window.scrollY;

  if (currentY > lastScrollY && currentY > 80) {
    // scrolling down
    header.classList.add("header-hidden");
  } else {
    // scrolling up
    header.classList.remove("header-hidden");
  }
  lastScrollY = currentY;
});

// OPTIONAL: SIMPLE ADD TO CART ALERT
function addToCart(productName) {
  alert(`“${productName}” added to enquiry cart. Our team will contact you shortly.`);
}

// CONTACT FORM BASIC VALIDATION (FRONTEND ONLY)
function validateContactForm(event) {
  const name = document.getElementById("name");
  const phone = document.getElementById("phone");
  const message = document.getElementById("message");

  if (!name.value.trim() || !phone.value.trim() || !message.value.trim()) {
    event.preventDefault();
    alert("Please fill your name, mobile number and message.");
  }
}