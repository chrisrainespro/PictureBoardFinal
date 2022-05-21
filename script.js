/*{
	firstName: "FIRST",
	lastName: "LAST",
	idNumber: "ID",
	counselor: "*",
	program: "PROGRAM",
	dayin: new Date("2022/03/06")
},*/




let studentObjects = [];



function LoadImages() {
	let newRequest = new XMLHttpRequest(); 
    newRequest.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        studentObjects = JSON.parse(this.responseText);
    }
	
}
    newRequest.open("GET", "/students", false);
    newRequest.send();
	document.getElementById('studentPictureGrid').innerHTML = " ";
	studentObjects.sort(function (a, b) {
		if (a.lastName.toLowerCase() < b.lastName.toLowerCase()) return -1;
		if (a.lastName.toLowerCase() > b.lastName.toLowerCase()) return 1;
		return 0;

	});
	for (i = 0; i < studentObjects.length; i++) {
		var students = document.getElementById('studentPictureGrid');
		var vsp = document.getElementById('vspPictureGrid');
		var article = document.createElement("article");
		var img = document.createElement("img");
		var name = document.createElement("h2");
		var id = document.createElement("p");
		var currentProgram = document.createElement("p");
		var counselor = document.createElement("p");
		var inDay = document.createElement("p");

		id.innerHTML = "Student ID: " + studentObjects[i].idNumber;
		currentProgram.innerHTML = "Program: " + studentObjects[i].program;
		let convertDayin = Date.parse(studentObjects[i].dayin);
		let newDate = new Date(convertDayin);
		inDay.innerHTML = newDate.toDateString();
		name.innerHTML = studentObjects[i].lastName + ", " + studentObjects[i].firstName;
		counselor.innerHTML = "Pastor " + studentObjects[i].counselor;
		img.src = studentObjects[i].idNumber + ".jpg";
		article.appendChild(img);
		article.appendChild(name);
		article.appendChild(id);
		article.appendChild(currentProgram);
		article.appendChild(counselor);
		article.appendChild(inDay);
		if (studentObjects[i].program == "VSP") {
			article.style.backgroundColor = "#5F039B";
		}
		else if (studentObjects[i].program == "30") {
			article.style.backgroundColor = "#039B96";
		}
		students.appendChild(article);
		
	}
}


function sortByCounselor() {
	studentObjects.sort(function (a, b) {
		if (a.lastName.toLowerCase() < b.lastName.toLowerCase()) return -1;
		if (a.lastName.toLowerCase() > b.lastName.toLowerCase()) return 1;
		return 0;

	});
	studentObjects.sort(function (a, b) {
		if (a.counselor.toLowerCase() < b.counselor.toLowerCase()) return -1;
		if (a.counselor.toLowerCase() > b.counselor.toLowerCase()) return 1;
		return 0;

	});

	document.getElementById('studentPictureGrid').innerHTML = " ";
	for (i = 0; i < studentObjects.length; i++) {
		var students = document.getElementById('studentPictureGrid');
		var article = document.createElement("article");
		var img = document.createElement("img");
		var name = document.createElement("h2");
		var id = document.createElement("p");
		var currentProgram = document.createElement("p");
		var counselor = document.createElement("p");
		var inDay = document.createElement("p");

		id.innerHTML = "Student ID: " + studentObjects[i].idNumber;
		currentProgram.innerHTML = "Program: " + studentObjects[i].program;
		let convertDayin = Date.parse(studentObjects[i].dayin);
		let newDate = new Date(convertDayin);
		inDay.innerHTML = newDate.toDateString();
		name.innerHTML = studentObjects[i].lastName + ", " + studentObjects[i].firstName;
		counselor.innerHTML = "Pastor " + studentObjects[i].counselor;
		img.src = studentObjects[i].idNumber + ".jpg";
		article.appendChild(img);
		article.appendChild(name);
		article.appendChild(id);
		article.appendChild(currentProgram);
		article.appendChild(counselor);
		article.appendChild(inDay);
		if (studentObjects[i].program == "VSP") {
			article.style.backgroundColor = "#5F039B";
		}
		else if (studentObjects[i].program == "30") {
			article.style.backgroundColor = "#039B96";
		}
		students.appendChild(article);
		
	}
}

function sortByProgram() {
	studentObjects.sort(function (a, b) {
		if (a.lastName.toLowerCase() < b.lastName.toLowerCase()) return -1;
		if (a.lastName.toLowerCase() > b.lastName.toLowerCase()) return 1;
		return 0;

	});
	studentObjects.sort(function (a, b) {
		if (a.program.toLowerCase() < b.program.toLowerCase()) return -1;
		if (a.program.toLowerCase() > b.program.toLowerCase()) return 1;
		return 0;

	});

	document.getElementById('studentPictureGrid').innerHTML = " ";
	for (i = 0; i < studentObjects.length; i++) {
		var students = document.getElementById('studentPictureGrid');
		var article = document.createElement("article");
		var img = document.createElement("img");
		var name = document.createElement("h2");
		var id = document.createElement("p");
		var currentProgram = document.createElement("p");
		var counselor = document.createElement("p");
		var inDay = document.createElement("p");

		id.innerHTML = "Student ID: " + studentObjects[i].idNumber;
		currentProgram.innerHTML = "Program: " + studentObjects[i].program;
		let convertDayin = Date.parse(studentObjects[i].dayin);
		let newDate = new Date(convertDayin);
		inDay.innerHTML = newDate.toDateString();
		name.innerHTML = studentObjects[i].lastName + ", " + studentObjects[i].firstName;
		counselor.innerHTML = "Pastor " + studentObjects[i].counselor;
		img.src = studentObjects[i].idNumber + ".jpg";
		article.appendChild(img);
		article.appendChild(name);
		article.appendChild(id);
		article.appendChild(currentProgram);
		article.appendChild(counselor);
		article.appendChild(inDay);
		if (studentObjects[i].program == "VSP") {
			article.style.backgroundColor = "#5F039B";
		}
		else if (studentObjects[i].program == "30") {
			article.style.backgroundColor = "#039B96";
		}
		students.appendChild(article);

	}
}

function sortByDayIn() {
	studentObjects.sort(function (a, b) {
		if (a.lastName.toLowerCase() < b.lastName.toLowerCase()) return -1;
		if (a.lastName.toLowerCase() > b.lastName.toLowerCase()) return 1;
		return 0;

	});
	studentObjects.sort(function (a, b) {
		if (a.dayin > b.dayin) return -1;
		if (a.dayin < b.dayin) return 1;
		return 0;

	});

	document.getElementById('studentPictureGrid').innerHTML = " ";
	for (i = 0; i < studentObjects.length; i++) {
		var students = document.getElementById('studentPictureGrid');
		var article = document.createElement("article");
		var img = document.createElement("img");
		var name = document.createElement("h2");
		var id = document.createElement("p");
		var currentProgram = document.createElement("p");
		var counselor = document.createElement("p");
		var inDay = document.createElement("p");

		id.innerHTML = "Student ID: " + studentObjects[i].idNumber;
		currentProgram.innerHTML = "Program: " + studentObjects[i].program;
		let convertDayin = Date.parse(studentObjects[i].dayin);
		let newDate = new Date(convertDayin);
		inDay.innerHTML = newDate.toDateString();
		name.innerHTML = studentObjects[i].lastName + ", " + studentObjects[i].firstName;
		counselor.innerHTML = "Pastor " + studentObjects[i].counselor;
		img.src = studentObjects[i].idNumber + ".jpg";
		article.appendChild(img);
		article.appendChild(name);
		article.appendChild(id);
		article.appendChild(currentProgram);
		article.appendChild(counselor);
		article.appendChild(inDay);
		if (studentObjects[i].program == "VSP") {
			article.style.backgroundColor = "#5F039B";
		}
		else if (studentObjects[i].program == "30") {
			article.style.backgroundColor = "#039B96";
		}
		students.appendChild(article);

	}}

	function filterByCounselor() {

		document.getElementById('studentPictureGrid').innerHTML = " ";
		studentObjects.sort(function (a, b) {
			if (a.lastName.toLowerCase() < b.lastName.toLowerCase()) return -1;
			if (a.lastName.toLowerCase() > b.lastName.toLowerCase()) return 1;
			return 0;
	
		});

		let counselorSelect = document.getElementById('counselor').value;
		
		for (i = 0; i < studentObjects.length; i++) {

			if (counselorSelect == studentObjects[i].counselor) {
			var students = document.getElementById('studentPictureGrid');
			var vsp = document.getElementById('vspPictureGrid');
			var article = document.createElement("article");
			var img = document.createElement("img");
			var name = document.createElement("h2");
			var id = document.createElement("p");
			var currentProgram = document.createElement("p");
			var counselor = document.createElement("p");
			var inDay = document.createElement("p");
	
			id.innerHTML = "Student ID: " + studentObjects[i].idNumber;
		currentProgram.innerHTML = "Program: " + studentObjects[i].program;
		let convertDayin = Date.parse(studentObjects[i].dayin);
		let newDate = new Date(convertDayin);
		inDay.innerHTML = newDate.toDateString();
		name.innerHTML = studentObjects[i].lastName + ", " + studentObjects[i].firstName;
		counselor.innerHTML = "Pastor " + studentObjects[i].counselor;
		img.src = studentObjects[i].idNumber + ".jpg";
			article.appendChild(img);
			article.appendChild(name);
			article.appendChild(id);
			article.appendChild(currentProgram);
			article.appendChild(counselor);
			article.appendChild(inDay);
			if (studentObjects[i].program == "VSP") {
				article.style.backgroundColor = "#5F039B";
			}
			else if (studentObjects[i].program == "30") {
				article.style.backgroundColor = "#039B96";
			}
			students.appendChild(article);
		}
			
		}
	
}

