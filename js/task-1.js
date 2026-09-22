const categoriesList = document.querySelector("#categories");
const categoryItems = categoriesList.querySelectorAll("li.item");

console.log(`Кількість категорій: ${categoryItems.length}`);

categoryItems.forEach((category) => {
  const title = category.querySelector("h2").textContent;
  const elementsCount = category.querySelectorAll("li").length;
  console.log(`Категорія: ${title} — Кількість елементів: ${elementsCount}`);
});
