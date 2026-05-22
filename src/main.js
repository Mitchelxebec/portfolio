const techCaps = document.getElementById("tech");

if (techCaps.textContent === "JavaScript") {
    techCaps.style.color = "#00CFFF";
    techCaps.style.borderColor = "#00CFFF"
} else if(techCaps.textContent === "HTML/CSS") {
    techCaps.style.color = "#FF3CAC"
    techCaps.style.borderColor = "#FF3CAC"
} else {
    techCaps.style.color = "#0D1117"
    techCaps.style.borderColor = "#0D1117"
}