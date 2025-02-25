document.addEventListener("DOMContentLoaded", () => {
    const serviceCards = document.querySelectorAll(".serviceCard");

    serviceCards.forEach((serviceCard) => {
        const plusIcon = serviceCard.querySelector("h2 img");
        const answer = serviceCard.querySelector("h3");

        plusIcon.addEventListener("click", () => {
            // Step 1: Check if the clicked FAQ is already open
            const isAlreadyOpen = answer.style.display === "block";

            // Step 2: Close all FAQs first (ensuring only one remains open)
            serviceCards.forEach((otherFaqCard) => {
                const otherService = otherFaqCard.querySelector("h3");
                const otherPlusIcon = otherFaqCard.querySelector("h2 img");

                if (otherService.style.display === "block") {
                    otherService.style.display = "none";
                    otherPlusIcon.src = "/assets/icons/pluseIcon.svg";
                    otherFaqCard.style.animation = "heightDisappear 0.5s ease-in forwards";
                    otherPlusIcon.style.animation = "rotateIconReverse 0.5s ease-in forwards";
                }
            });

            // Step 3: Open the clicked FAQ only if it was not already open
            if (!isAlreadyOpen) {
                answer.style.display = "block";
                plusIcon.src = "/assets/icons/MinusIcon.svg";
                serviceCard.style.animation = "heightAppear 0.5s ease-in forwards";
                plusIcon.style.animation = "rotateIcon 0.5s ease-in forwards";
            }
        });
    });
});
