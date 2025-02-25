document.addEventListener("DOMContentLoaded", () => {
    fetch("../Navbar & Footer Section/index.html")
        .then(response => response.text())
        .then(data => {
            const tempDiv = document.createElement("div");
            tempDiv.innerHTML = data;

            // Insert Navbar
            const navbar = document.getElementById("navbar");
            navbar.innerHTML = tempDiv.querySelector("#navbarContainer").innerHTML;

            // Insert Footer
            document.getElementById("footer").innerHTML = tempDiv.querySelector("#footerSection").innerHTML;

            // Toggle Menu
            const menu = document.querySelector(".menu");
            const toggle = document.querySelector(".mobileLinks");
            menu.addEventListener("click", () => {
                toggle.classList.toggle("active");
            })
        })
        .catch(error => console.error("Error loading components:", error));

    // Add animations 
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("showAll");
            }
        });
    });
    const hiddenElements = document.querySelectorAll(".hideLeft, .hideRight, .hideDown, .hideInside, .hideBlur, .hideLeftConic, .hideRightConic");
    const delayElements = document.querySelectorAll(".hideLeftConic, .hideRightConic")
    hiddenElements.forEach(element => observer.observe(element));

});
