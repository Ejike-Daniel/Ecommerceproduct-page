function showSideBar() {
  document.querySelector(".hamburger").classList.toggle("hidden");
  document.querySelector(".delete").classList.toggle("hidden");
  document.querySelector(".navList").classList.remove("hidden");
  document.querySelector(".navList").classList.add("flex-col");
}

function hideSideBar() {
  document.querySelector(".hamburger").classList.toggle("hidden");
  document.querySelector(".delete").classList.toggle("hidden");
  document.querySelector(".navList").classList.add("hidden");
  document.querySelector(".navList").classList.remove("flex-col");
}
