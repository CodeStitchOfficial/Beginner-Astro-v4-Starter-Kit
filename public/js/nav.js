// For View Transitions purposes - Makes the script controlling the <Hamburger /> mobile menu component available after navigating to a new page.
document.addEventListener("astro:page-load", () => {

    // add classes for mobile navigation toggling
    var CSbody = document.querySelector("body");
    const CSnavbarMenu = document.getElementById("cs-navigation");
    const mobileMenuToggle = document.getElementById("mobile-menu-toggle");

    function toggleMenu() {
      mobileMenuToggle.classList.toggle("cs-active");
      CSnavbarMenu.classList.toggle("cs-active");
      CSbody.classList.toggle("cs-open");
    }

    // Checks the value of aria expanded on an element and changes it accordingly whether it is expanded or not
    function ariaExpanded(element) {
      const isExpanded = element.getAttribute("aria-expanded");
      element.setAttribute(
        "aria-expanded",
        isExpanded === "false" ? "true" : "false",
      );
    }

    // Toggles the hamburger mobile menu
    mobileMenuToggle.addEventListener("click", function () {
      toggleMenu();
      ariaExpanded(mobileMenuToggle);
    });
  });