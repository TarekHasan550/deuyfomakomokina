document.addEventListener("DOMContentLoaded", () => {
    const valueIncreaser = (element, end, intervalTime) => {
        let current = 0;
        let interval = setInterval(() => {
            current++;
            if (current === end) {
                current = end;
                clearInterval(interval);
            }
            element.innerText = current + "+";
        }, intervalTime);
    }
    const findElement = (element) => {
        return document.querySelector(element);
    }

    let observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                valueIncreaser(findElement(".projectCounter:nth-of-type(1) h1"), 20, 60);
                valueIncreaser(findElement(".projectCounter:nth-of-type(2) h1"), 300, 0.1);
                valueIncreaser(findElement(".projectCounter:nth-of-type(3) h1"), 2, 200);
                valueIncreaser(findElement(".projectCounter:nth-of-type(4) h1"), 20, 60);
                observer.disconnect();
            }

        });
    });
    observer.observe(findElement(".completedProjects"));
})