document.addEventListener("DOMContentLoaded", () => {
    // Alert Box Define
    const alertBox = document.getElementById("alertBox");

    fetch("../Navbar & Footer Section/index.html")
        .then(response => response.text())
        .then(data => {
            const tempDiv = document.createElement("div");
            tempDiv.innerHTML = data;

            try {
                // Insert Navbar
                document.getElementById("navbar").innerHTML = tempDiv.querySelector("#navbarContainer").innerHTML;
            } catch(error){console.log(error);}

            try {
                // Insert Footer
                document.getElementById("footer").innerHTML = tempDiv.querySelector("#footerSection").innerHTML;
            } catch (error){console.log(error);}

            try {
                // Insert AlertBox
                alertBox.innerHTML = tempDiv.querySelector(".popUpContainer").innerHTML;
            } catch (error){console.log(error);}

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
    const hiddenElements = document.querySelectorAll(".hideLeft, .hideRight, .hideDown, .hideLessDown, .hideSmallDown, .hideInside, .hideBlur, .hideLeftConic, .hideRightConic");
    const delayElements = document.querySelectorAll(".hideLeftConic, .hideRightConic")
    hiddenElements.forEach(element => observer.observe(element));

    // Insert AlertBox
    alertPopUp = (event) => {
        if (alertBox) {
            alertBox.style.display = "block";

            //Collect & set clicked button text
            let btnTxt = event.target.innerText;
            let dynamicAlertText = `We're almost there..! \n
            We truly appreciate your interest in "${btnTxt}". We are working hard behind the scenes to bring you a seamless and hassle-free experience.`;
            // console.log(dynamicAlertText)
            alertBox.querySelector("p").innerText = dynamicAlertText;

            //Hide alert popUp again
            const close = alertBox.querySelector("button");
            const crosse = alertBox.querySelector("img");
            if (close && crosse) {
                document.body.addEventListener("click", (event) => {
                    if (event.target === close || event.target === crosse) {
                        alertBox.style.display = "none";
                    }
                })
            }
        } else {
            console.error("alertBox not found when trying to show alert!");
        }
    }

});
