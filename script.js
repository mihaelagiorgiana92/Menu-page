document.addEventListener("DOMContentLoaded", () => {
  let titleElement = document.querySelector(".animate-title");
  let fullTitle = "Our Christmas Menu"; 
  let index = 0;

  function displayLetterByLetter() {
    if (index < fullTitle.length) {
      titleElement.innerHTML += fullTitle[index];
      index++;
      setTimeout(displayLetterByLetter, 150); 
    }
  }

  titleElement.innerHTML = "";
  displayLetterByLetter();

  let logo = document.getElementById('logo');
  logo.addEventListener('click', () => {
    if (logo.src.includes('logo2.jpg')) {
      logo.src = 'logo3.jpg';
      logo.alt = 'Slogan';
    } else {
      logo.src = 'logo2.jpg';
      logo.alt = 'Logo';
    }
  });

  // create menu items 
  let restaurant = {
    name: "Italian Food",
    address: "Bentley Lane 24, Walsall",
    starters: [
      { name: "Bruschetta", price: 8.99, image: "bruschetta.jpg", description: "A mixture of chopped tomatoes, balsamic, basil, and garlic, spooned over olive-oil brushed slices of toasted baguette or rustic bread." },
      { name: "Tagliere", price: 12.99, image: "tagliere.jpg", description: "A mixture of cheese and curd, meat and sausage, with grissini and olives." },
    ],
    mains: [
      { name: "Agnolotti", price: 13.99, image: "Agnolotti-Del-Plin-.webp", description: "Tiny, meat-filled Piedmontese agnolotti, stuffed with a pork, chicken, veal, and vegetable filling bound with butter and cheese." },
      { name: "Scarpariello", price: 13.99, image: "Chicken-Scarpariello.webp", description: "Chicken sautéed in a tangy lemon glaze with bell pepper." },
    ],
    desserts: [
      { name: "Maritozzo", price: 6.99, image: "maritozzo.webp", description: "The maritozzo is a soft bun split down the middle and filled with whipped cream." },
      { name: "Tiramisu", price: 8.99, image: "tiramisu.webp", description: "An irresistible combination of layers of coffee-soaked savoiardi (ladyfinger biscuits) and mascarpone whipped with sugar and eggs, topped with cocoa powder." },
    ]
  };

  // display menu items
  function displayMenuItems(sectionId, items) {
    let section = document.querySelector(`#${sectionId} .menu-group`);
    section.innerHTML = ''; // Clear existing content

    items.forEach(item => {
      // Create HTML for each item
      let itemHTML = `
        <div class="menu-item">
          <img src="${item.image}" alt="${item.name}">
          <h3>${item.name}: <span>£${item.price}</span></h3>
          <p>${item.description}</p>
        </div>
      `;
      section.innerHTML += itemHTML; // Append the item HTML to the section
    });
  }

  // Display items in each category
  displayMenuItems('starters', restaurant.starters);
  displayMenuItems('mains', restaurant.mains);
  displayMenuItems('desserts', restaurant.desserts);

});
