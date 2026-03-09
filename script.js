function addButton() {
	document.getElementById("task-textbox").style.display = "inline-block";
	document.getElementById("ok-btn").style.display = "inline-block";
}

function addTask() {
	let textbox = document.getElementById("task-textbox");
	let data = textbox.value;
	// let num = Math.floor(Math.random()*100);
	let num = Date.now();
	localStorage.setItem(num, data);

	viewList();
	// reset textbox
	textbox.value = "";

}

function viewList() {

	let list = document.getElementById("list");
	list.innerHTML = "<h1>List:</h1>";

	for (let i = 0; i < localStorage.length; i++) {

		let key = localStorage.key(i);
		let value = localStorage.getItem(key);

		list.innerHTML += `
			<div class="list-item">
				<input type="checkbox">
				<span class="task">${value}</span>
				<i class="fa fa-pencil" onclick="updateTask('${key}')"></i>
		    <i class="material-icons" onclick="removeTask('${key}')">&#xe872;</i>
			</div>`;

// 		document.getElementById("list").innerHTML += 
// 			`<h1>List: </h1>
// 			<div class="list-item">
// 				<span class="task">${(value)}</span>
// 				<input type="checkbox">
// 			</div>`;
// 		document.getElementById("list").appendChild("list");

	// document.getElementById("list").innerHTML += num + " " + localStorage.getItem(num) + ` <input type="checkbox"><br>`;

	}
}

function updateTask(key) {
	let newtask = document.getElementById("task-textbox").value;

	if (localStorage.getItem(key)) {
		localStorage.setItem(key, newtask);
		viewList(); // refresh the list
	}
}

function updateTask(key) {

	let textbox = document.getElementById("task-textbox");
	let okBtn = document.getElementById("ok-btn");

	// show input field
	textbox.style.display = "inline-block";
	okBtn.style.display = "inline-block";

	// change button text
	okBtn.innerText = "Update";

	// fill textbox with existing task
	// textbox.value = localStorage.getItem(key);

	// change OK button action to update
	okBtn.onclick = function() {

		let newtask = textbox.value;

		if(newtask.trim() === "") return;

		localStorage.setItem(key, newtask);

		viewList();

		// reset textbox
		textbox.value = "";

		// restore button text
		okBtn.innerText = "OK";

		// restore add mode
		okBtn.onclick = addTask;
	};
}

function removeTask(key){
	localStorage.removeItem(key);
	viewList();
}
