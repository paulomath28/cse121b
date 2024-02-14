/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById("temples");
let templeList = [];

/* async displayTemples Function */
const displayTemples = async (temples) => {
  temples.forEach((temple) => {
    const article = document.createElement("article");
    const h3 = document.createElement("h3");
    h3.textContent = temple.templeName;
    const img = document.createElement("img");
    img.src = temple.imageUrl;
    img.alt = temple.location;
    article.appendChild(h3);
    article.appendChild(img);
    templesElement.appendChild(article);
  });
};

/* async getTemples Function using fetch()*/
const getTemples = async () => {
  const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
  templeList = await response.json();
  displayTemples(templeList);
};

/* reset Function */
const reset = () => {
  templesElement.innerHTML = "";
};

/* filterTemples Function */
const filterTemples = (temples) => {
  reset();
  const filter = document.getElementById("filtered").value;
  switch (filter) {
    case "utah":
      displayTemples(temples.filter((temple) => temple.location.includes("Utah")));
      break;
    case "notutah":
      displayTemples(temples.filter((temple) => !temple.location.includes("Utah")));
      break;
    case "older":
      displayTemples(temples.filter((temple) => new Date(temple.dedicated) < new Date(1950, 0, 1)));
      break;
    case "all":
      displayTemples(temples);
      break;
    default:
      break;
  }
};



getTemples();

/* Event Listener */
document.getElementById("filtered").addEventListener("change", () => {
  filterTemples(templeList);
});

/* Function: sortBy */
const sortBy = (temples) => {
    const filter = document.getElementById("filtered").value;
    switch (filter) {
      case "utah":
        return temples.filter(temple => temple.location.includes("Utah"));
      case "notutah":
        return temples.filter(temple => !temple.location.includes("Utah"));
      case "older":
        return temples.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1));
      case "all":
      default:
        return temples;
    }
  };

  document.getElementById("filtered").addEventListener("change", () => {
    const filteredTemples = sortBy(templeList); // Change Event Listener
    displayTemples(filteredTemples); 
  });
  
  