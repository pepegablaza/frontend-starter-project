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

cartButton.addEventListener("click", () =>
	cartContent.classList.toggle("active")
);
btnUp.addEventListener("click", () => newList.pop());
btnDown.addEventListener("click", () => newList.add());

newList.displayList();
