document.addEventListener("DOMContentLoaded", function () {
    const logo = document.getElementById("logo");
    const performanceValue = document.querySelector(".performance-value");

    logo.addEventListener("click", () => {
        window.location.href = "/";
    });

    if (performanceValue.textContent === "LOW") {
        performanceValue.style.color = "#FF355E"; // neon red
    } else if (performanceValue.textContent === "MED") {
        performanceValue.style.color = "#FFA500"; // neon orange
    } else if (performanceValue.textContent === "HIGH") {
        performanceValue.style.color = "#39FF14"; // neon green
    } else {
        performanceValue.style.color = "white"; // default color
    }
})