import {
	cartButton,
	cartContent,
	btnUp,
	btnDown,
	title,
	list,
} from "./constants.js";
import { products } from "./products.js";
import List from "./List.js";

const newList = new List(products, list, 3, title);

// let rows = 3;
// let start = 0;
// let maxStartNumber = products.length - rows;

// function displayList(array, wrapper, numberOfRows, startPosition) {
// 	wrapper.innerHTML = "";
// 	title.textContent = `My Cart (${array.length}) items`;
// 	let end = startPosition + numberOfRows;
// 	let paginatedItems = array.slice(startPosition, end);
// 	paginatedItems.forEach((item) => {
// 		wrapper.innerHTML += item;
// 	});
// }

// function addOne() {
// 	start++;
// 	if (start > maxStartNumber) {
// 		start = maxStartNumber;
// 	}
// }
// function popOne() {
// 	start--;
// 	if (start < 0) {
// 		start = 0;
// 	}
// }

// function handleClick(operation) {
// 	operation();
// 	displayList(products, list, rows, start);
// }

cartButton.addEventListener("click", () =>
	cartContent.classList.toggle("active")
);
btnUp.addEventListener("click", () => newList.pop());
btnDown.addEventListener("click", () => newList.add());

newList.displayList();
