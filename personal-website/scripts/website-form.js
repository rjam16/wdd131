const today = new Date();
const currentyear = document.querySelector("#currentyear");
currentyear.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

let text = document.lastModified;
document.getElementById("lastModified").innerHTML = text;
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

const mediumNameSelectLocator = document.querySelector("#mediumName");
const ideaCountLocator = document.querySelector("#ideaCount");
const formLocator = document.querySelector("#form");

let ideaCount = localStorage.getItem("ideaCount") || 0;

const mediums = [
    {
      id: "0001",
      name: "Short Story/Novel",
    },
    {
      id: "0002",
      name: "Art Piece",
    },
    {
      id: "0003",
      name: "Script",
    },
    {
      id: "0004",
      name: "Essay",
    },
    {
      id: "0005",
      name: "Presentation",
    },
    {
        id: "0006",
        name: "Game",
    },
    {
        id: "0007",
        name: "Invention",
    },
    {
        id: "0008",
        name: "Other",
    }
  ];

  if (mediumNameSelectLocator) {
    mediums.forEach(medium => {
        const option = document.createElement("option");
        option.setAttribute("value", medium.id);
        option.textContent = medium.name;

        mediumNameSelectLocator.appendChild(option);
    });
  }
  if (formLocator) {
    formLocator.addEventListener("submit", () => {
        ideaCount++;
        localStorage.setItem("ideaCount", ideaCount);
    });
  }
  if (ideaCountLocator) {
    ideaCountLocator.innerHTML = `Total ideas created: ${ideaCount}`;
  }