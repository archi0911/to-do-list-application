function addButton() {
	document.getElementById("add-task").style.display = "block";
  document.getElementById("ok").style.display = "block";
}

function updateButton() {
	document.getElementById("update-task").style.display = "block";
  document.getElementById("update").style.display = "block";
}

let count = 1;

function generateNo() {
	return count++;

}

function storeData() {
	let data = document.getElementById("add-task").value;

	let num = generateNo();
	localStorage.setItem(num, data);

	// document.getElementById("list").innerHTML += num + " " + localStorage.getItem(num) + ` <input type="checkbox"><br>`;
	document.getElementById("list").innerHTML += 
	`<div class="list-item">
	<span class="num">${num}</span>
	<span class="task">${localStorage.getItem(num)}</span>
	<input type="checkbox">
	</div>`;
		document.getElementById("list").appendChild("list");

}


function updateData() {
	let data = document.getElementById("update-task").value;


}

function removeData() {
	// let key = document.getElementById("remove").value;

	for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    console.log(`${key}: ${value}`);
	}

}
