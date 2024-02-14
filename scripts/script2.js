const menuElement = document.getElementById("menu");
let menuList = [];

/* async displayMenu Function */
const displayMenu = async (menuItems) => {
  menuElement.innerHTML = ""; // Clear current menu element content
  menuItems.forEach((item) => {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menuItem");
    const h3 = document.createElement("h3");
    h3.textContent = item.name;
    const p = document.createElement("p");
    p.textContent = `${item.price} $`;
    menuItem.appendChild(h3);
    menuItem.appendChild(p);

    // Create and configure the image element
    const img = document.createElement("img");
    img.src = `images/${item.name.replace(/\s+/g, '').toLowerCase()}.jpg`; // Assuming item.name is the property in your menu item data containing the name of the dish
    img.alt = item.name; // Assuming item.name is the property in your menu item data containing the name of the dish
    img.classList.add("menuImage"); // Add a class for styling if needed

    menuItem.appendChild(img); // Append the image to the menu item

    menuElement.appendChild(menuItem);
  });
};

/* async getMenu Function using fetch() */
const getMenu = async () => {
  try {
    const response = await fetch("menuData.json"); // Replace "menuData.json" with your JSON data source
    menuList = await response.json();
    displayMenu(menuList);
  } catch (error) {
    console.error('Error fetching menu data:', error);
  }
};

/* reset Function */
const reset = () => {
  menuElement.innerHTML = "";
};

/* filterMenu Function */
const filterMenu = (menuItems) => {
  reset();
  const filter = document.getElementById("filtered").value;
  switch (filter) {
    case "vegetarian":
      displayMenu(menuItems.filter((item) => item.type === "vegetarian"));
      break;
    case "vegan":
      displayMenu(menuItems.filter((item) => item.type === "vegan"));
      break;
    
    case "all":
      displayMenu(menuItems);
      break;
    default:
      break;
  }
};

getMenu();

/* Event Listener */
document.getElementById("filtered").addEventListener("change", () => {
  filterMenu(menuList);
});



fetch('https://run.mocky.io/v3/53b9c884-4f46-479a-aec4-1ba17cc295fe')
  .then(response => {
    if (!response.ok) {
      throw new Error('Erro ao obter os dados do servidor');
    }
    return response.json();
  })
  .then(data => {
    
    console.log(data); 
  })
  .catch(error => {
    console.error('Ocorreu um erro:', error);
  });
