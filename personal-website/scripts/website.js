const today = new Date();
const currentyear = document.querySelector("#currentyear");
currentyear.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

let text = document.lastModified;
document.getElementById("lastModified").innerHTML = text;