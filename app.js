const menu = [
  {
    item: 1,
    title: "chocolate shake",
    category: "shake",
    price: 15.99,
    img: "./assets/shakes/chocolate.jpeg",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique veritatis exercitationem a quisquam provident saepe.",
  },
  {
    item: 2,
    title: "benana shake",
    category: "shake",
    price: 20,
    img: "assets/shakes/benana.jpeg",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique veritatis exercitationem a quisquam provident saepe.",
  },
  {
    item: 3,
    title: "coffee shake",
    category: "shake",
    price: 22,
    img: "assets/shakes/coffee.jpeg",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique veritatis exercitationem a quisquam provident saepe.",
  },
  {
    item: 4,
    title: "Strawberry shake",
    category: "shake",
    price: 23,
    img: "assets/shakes/Strawberry.jpeg",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique veritatis exercitationem a quisquam provident saepe.",
  },
  {
    item: 5,
    title: "bigel",
    category: "breakfast",
    price: 19,
    img: "assets/breakfast/bigel.jpeg",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique veritatis exercitationem a quisquam provident saepe.",
  },
  {
    item: 6,
    title: "crosan",
    category: "breakfast",
    price: 13,
    img: "assets/breakfast/crosan.jpeg",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique veritatis exercitationem a quisquam provident saepe.",
  },
  {
    item: 7,
    title: "simit",
    category: "breakfast",
    price: 20,
    img: "assets/breakfast/simit.jpeg",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique veritatis exercitationem a quisquam provident saepe.",
  },
  {
    item: 8,
    title: "crosan",
    category: "breakfast",
    price: 23,
    img: "assets/breakfast/crosan.jpeg",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique veritatis exercitationem a quisquam provident saepe.",
  },
  {
    item: 9,
    title: "vafel",
    category: "breakfast",
    price: 32,
    img: "assets/breakfast/vafel.jpeg",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique veritatis exercitationem a quisquam provident saepe.",
  },
  {
    item: 10,
    title: "cheese cake",
    category: "cake",
    price: 65,
    img: "assets/cake/cheese cake.jpeg",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique veritatis exercitationem a quisquam provident saepe.",
  },
  {
    item: 11,
    title: "chocolate cake",
    category: "cake",
    price: 25,
    img: "assets/cake/chocolate.jpeg",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique veritatis exercitationem a quisquam provident saepe.",
  },
  {
    item: 12,
    title: "doughnut",
    category: "cake",
    price: 32,
    img: "assets/cake/doughnut.jpeg",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique veritatis exercitationem a quisquam provident saepe.",
  },
  {
    item: 13,
    title: "lemonade mint",
    category: "juice",
    price: 25,
    img: "assets/juice/lemonade mint.jpeg",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique veritatis exercitationem a quisquam provident saepe.",
  },
  {
    item: 14,
    title: "summer juice",
    category: "juice",
    price: 32,
    img: "assets/juice/summer.jpeg",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique veritatis exercitationem a quisquam provident saepe.",
  },
  {
    item: 15,
    title: "watermelon juice",
    category: "juice",
    price: 32,
    img: "assets/juice/watermelon.jpeg",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique veritatis exercitationem a quisquam provident saepe.",
  },

];

// create the food of menu
const addListMenu = (itemList = []) => {
  document.getElementById("menu").innerHTML = itemList
    .map(
      (food) =>
        `<div class="menu-box">
     <img class="img-menu" src="${food.img}" alt="${food.title}" />
     <div>
     <div class="info">
      <h3>${food.title}</h3>
      <p>$${food.price}</p>
     </div>
     <p>${food.des}</p>
     </div>
     </div>`
    )
    .join(" ");
};

const setActiveClass = (button) => {
  if (button) {
    document.querySelectorAll(".button-category").forEach((b) => {
      b.classList.remove("active-button");
    });
    button.classList.add("active-button");
  }
};

// create list of menu from the list category
const addCategoryButton = () => {
  const buttonsList = menu.reduce(
    (categories, item) => {
      if (item && item.category && !categories.includes(item.category)) {
        categories.push(item.category);
      }
      return categories;
    },
    ["all"]
  );

  let buttons = buttonsList.map(
    (cat) =>
      `<button class="button-style button-category ${cat === 'all' ? 'active-button' : ''}" category-id="${cat}">${cat}</button>`
  );

  if (buttons.length > 0) {
    document.getElementById("button").innerHTML = buttons.join(" ");
  }

  document.querySelectorAll(".button-category").forEach((item) => {
    const categoryType = item.getAttribute("category-id");

    item.addEventListener("click", function () {
        setActiveClass(item)
    //   item.classList.add("active-button");
      if (categoryType === "all") {
        addListMenu(menu);
        return;
      }
      const filterList = menu.filter((item) => item.category === categoryType);
      addListMenu(filterList);
    });
  });
};

document.addEventListener("DOMContentLoaded", function () {
  addCategoryButton();
  addListMenu(menu);
});
