function addButton() {
	document.getElementById("add-task").style.display = "inline-block";
	document.getElementById("ok-btn").style.display = "inline-block";
}

function updateButton() {
	document.getElementById("update-task").style.display = "inline-block"; 
	document.getElementById("update-btn").style.display = "inline-block"; 
}

function removeButton() {
	document.getElementById("remove-task").style.display = "inline-block"; 
	document.getElementById("remove-btn").style.display = "inline-block"; 
}

let count = 1;

function generateNo() {
	return count++;
}

function addTask() {
	let data = document.getElementById("add-task").value;
	let num = generateNo();

	localStorage.setItem(num, data);

	document.getElementById("list").innerHTML += 
		`<div class="list-item">
		<span class="num">${num}</span>
		<span class="task">${localStorage.getItem(num)}</span>
		<input type="checkbox">
		</div>`;
	document.getElementById("list").appendChild("list");

	// document.getElementById("list").innerHTML += num + " " + localStorage.getItem(num) + ` <input type="checkbox"><br>`;
}

function updateTask() {
	let key = document.getElementById("update-task").value;
	let newtask = document.getElementById("add-task").value;

	if (localStorage.getItem(key)) {
		localStorage.setItem(key, newtask);

		let taskElements = document.querySelectorAll(".list-item");
        taskElements.forEach(item => {
            if (item.querySelector(".num").innerText == key) {
                item.querySelector(".task").innerText = newtask;
            }
        });
	}
	else {
			console.log("");
	}

}

// function removeTask() {
// 	// Get the key from the input box
// 	let key1 = document.getElementById("remove").value;

// 	if (localStorage.getItem(key1)) {
// 			localStorage.removeItem(key1);
// 	} 
// 	else {
// 			console.log("");
// 	}
   
function removeTask() {
    let key1 = document.getElementById("remove-task").value;

    if (localStorage.getItem(key1)) {
        // Remove from localStorage
        localStorage.removeItem(key1);

        // Remove from page
        let taskElements = document.querySelectorAll(".list-item");
        taskElements.forEach(item => {
            if (item.querySelector(".num").innerText == key1) {
                item.remove();
            }
        });

        console.log("");
    } 
		else {
        console.log("");
    }
}
