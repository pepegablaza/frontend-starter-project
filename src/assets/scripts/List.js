export default class List {
	constructor(array, wrapper, rows, title) {
		this.array = array;
		this.wrapper = wrapper;
		this.rows = rows;
		this.title = title;
	}
	start = 0;
	get maxStartNumber() {
		return this.array.length - this.rows;
	}
	get numberOfProducts() {
		return this.array.length;
	}

	displayList() {
		this.wrapper.innerHTML = "";
		this.title.textContent = `My Cart (${this.numberOfProducts}) items`;
		let end = this.start + this.rows;
		let paginatedItems = this.array.slice(this.start, end);
		paginatedItems.forEach((item) => {
			this.wrapper.innerHTML += item;
		});
	}
	add() {
		this.start++;
		if (this.start > this.maxStartNumber) {
			this.start = this.maxStartNumber;
		}
		this.displayList();
	}
	pop() {
		this.start--;
		if (this.start < 0) {
			this.start = 0;
		}
		this.displayList();
	}
}
