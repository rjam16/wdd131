const currentyear = document.querySelector("#currentyear");
currentyear.innerHTML = `getFullYear(): <span class="highlight">${today.getFullYear()}</span>`;

let lastModified = document.lastModified;
document.getElementById("modified").innerHTML = lastModified;