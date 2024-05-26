const today = new Date();
const currentyear = document.querySelector("#currentyear");
currentyear.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

let text = document.lastModified;
document.getElementById("lastModified").innerHTML = text;

const productNameSelectLocator = document.querySelector("#productName");
const reviewCountLocator = document.querySelector("#reviewCount");
const formLocator = document.querySelector("#form");

let reviewCount = localStorage.getItem("reviewCount") || 0;

const products = [
    {
      id: "fc-1888",
      name: "Flux Capacitor",
      averageRating: 4.5
    },
    {
      id: "fc-2050",
      name: "Power Laces",
      averageRating: 4.7
    },
    {
      id: "fs-1987",
      name: "Time Circuits",
      averageRating: 3.5
    },
    {
      id: "ac-2000",
      name: "Low Voltage Reactor",
      averageRating: 3.9
    },
    {
      id: "jj-1969",
      name: "Warp Equalizer",
      averageRating: 5.0
    }
  ];

  if (productNameSelectLocator) {
    products.forEach(product => {
        const option = document.createElement("option");
        option.setAttribute("value", product.id);
        option.textContent = product.name;

        productNameSelectLocator.appendChild(option);
    });
  }
  if (formLocator) {
    formLocator.addEventListener("submit", () => {
        reviewCount++;
        localStorage.setItem("reviewCount", reviewCount);
    });
  }
  if (reviewCountLocator) {
    reviewCountLocator.innerHTML = `Total reviews submitted: ${reviewCount}`;
  }