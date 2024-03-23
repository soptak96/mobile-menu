const showMobileMenuIcon = document.querySelector("#show");
const closeMobileMenuIcon = document.querySelector("#close");
const headerContainer = document.querySelector(".container");
showMobileMenuIcon.addEventListener("click", () => {
  console.log("hello");
  headerContainer.classList.add("active");
});
closeMobileMenuIcon.addEventListener("click", () => {
  headerContainer.classList.remove("active");
});
