document.addEventListener("DOMContentLoaded", () => {
    const faqCards = document.querySelectorAll(".faqCard");

    faqCards.forEach((faqCard) => {
        const plusIcon = faqCard.querySelector("h2 img");
        const answer = faqCard.querySelector("h3");

        plusIcon.addEventListener("click", () => {
            // Step 1: Check if the clicked FAQ is already open
            const isAlreadyOpen = answer.style.display === "block";

            // Step 2: Close all FAQs first (ensuring only one remains open)
            faqCards.forEach((otherFaqCard) => {
                const otherAnswer = otherFaqCard.querySelector("h3");
                const otherPlusIcon = otherFaqCard.querySelector("h2 img");

                if (otherAnswer.style.display === "block") {
                    otherAnswer.style.display = "none";
                    otherPlusIcon.src = "/assets/icons/pluseIcon.svg";
                    otherFaqCard.style.animation = "heightDisappear 0.5s ease-in forwards";
                    otherPlusIcon.style.animation = "rotateIconReverse 0.5s ease-in forwards";
                }
            });

            // Step 3: Open the clicked FAQ only if it was not already open
            if (!isAlreadyOpen) {
                answer.style.display = "block";
                plusIcon.src = "/assets/icons/MinusIcon.svg";
                faqCard.style.animation = "heightAppear 0.5s ease-in forwards";
                plusIcon.style.animation = "rotateIcon 0.5s ease-in forwards";
            }
        });
    });
});
