const today = new Date();
const currentyear = document.querySelector("#currentyear");
currentyear.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

let temp = 12;
let windSpeed = 5;
function windChill(temp, windSpeed) {
    if (temp < 10 | temp == 10 & windSpeed > 4.8) {
        return temp - (windSpeed * 0.7) + "°C";
    } else {
        return "N/A";
}
}
document.getElementById("windChill").innerHTML = windChill(temp, windSpeed);
