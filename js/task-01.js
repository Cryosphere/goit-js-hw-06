const categories = document.querySelectorAll(".item");
console.log(`Number of categories: ${categories.length}`);

categories.forEach((categories) => {
    const categoryHeading = categories.querySelector('h2');
    const listItemsCount = categories.querySelectorAll('li').length;

    console.log(`Category: ${categoryHeading.textContent}`);
    console.log(`Elements: ${listItemsCount}`);
});