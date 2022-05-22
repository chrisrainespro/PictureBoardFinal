let studentArray = [];
let newRequest = new XMLHttpRequest(); 
newRequest.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        studentArray = JSON.parse(this.responseText);
    }
}
newRequest.open("GET", "../students", false);
newRequest.send();
buildStudentList();


function buildStudentList () {
studentArray.sort(function(a, b) {
	if (a.lastName.toLowerCase() < b.lastName.toLowerCase()) return -1;
	if (a.lastName.toLowerCase() > b.lastName.toLowerCase()) return 1;
	return 0;

});
for (let i=0; i<studentArray.length; i++) {
    var tableBody = document.getElementById('table-body');
    var tableRow = document.createElement("tr");
    tableRow.className = "table-secondary"
    var lastName = document.createElement("th");
    lastName.scope = "row";
    lastName.innerHTML = studentArray[i].lastName;
    tableRow.appendChild(lastName);
    var firstName = document.createElement("td");
    firstName.innerHTML = studentArray[i].firstName;
    tableRow.appendChild(firstName);
    var studentID = document.createElement('td');
    studentID.innerHTML = studentArray[i].idNumber;
    tableRow.appendChild(studentID);
    var editButton = document.createElement("td");
    editButton.innerHTML= `<button class='btn btn-primary' onClick='onClickEdit(${i})'>Edit</button>`;
    tableRow.appendChild(editButton);
    var deleteButton = document.createElement("td");
    deleteButton.innerHTML= `<button class='btn btn-primary' onClick='onClickDelete(${i})'>Delete</button>`;
    tableRow.appendChild(deleteButton);
    tableBody.appendChild(tableRow);

}

console.log(studentArray);

}


function onClickDelete(id) {
    const fullName = studentArray[id].firstName + " " + studentArray[id].lastName;
    if (confirm('Are you sure you want to delete ' + fullName + "?")) {
    console.log(id);
    studentObject = {idNumber: studentArray[id].idNumber};
    console.log(studentObject);
    let deleteRequest = new XMLHttpRequest(); 
    deleteRequest.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
        }
    }
    deleteRequest.open("DELETE", "/students", false);
    deleteRequest.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    let request = JSON.stringify(studentObject);
    console.log("Request " + request);
    deleteRequest.send(request);
    location.reload();}
    else {
        return;
    }
    }

function onClickEdit(id) {
    document.getElementById('editfirstName').value = studentArray[id].firstName;
    document.getElementById('editlastName').value = studentArray[id].lastName;
    document.getElementById('editidNumber').value = studentArray[id].idNumber;
    document.getElementById('editcounselor').value = studentArray[id].counselor;
    document.getElementById('editprogram').value = studentArray[id].program;
    document.getElementById('editdayin').value = studentArray[id].dayin;
    document.getElementById('student-table-div').style = "display: none";
    document.getElementById('new-student').style = "display: none";
    document.getElementById('edit-student').style = "display: block";
} 
function onAddStudent() {
    let addStudentObject = {
        firstName: "",
        lastName: "",
        idNumber: "",
        counselor: "",
        program: "",
        dayin: new Date()
    }

    addStudentObject.firstName = document.getElementById('firstName').value;
    addStudentObject.lastName = document.getElementById('lastName').value;
    addStudentObject.idNumber = document.getElementById('idNumber').value;
    addStudentObject.counselor = document.getElementById('counselor').value;
    addStudentObject.program = document.getElementById('program').value;
    addStudentObject.dayin = document.getElementById('dayin').value;

    console.log(addStudentObject);
    let postRequest = new XMLHttpRequest(); 
    postRequest.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
        }
    }
    postRequest.open("POST", "/students", false);
    postRequest.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    let request = JSON.stringify(addStudentObject);
    postRequest.send(request);
    location.reload();


}

function onEditStudent() {
    let addStudentObject = {
        firstName: "",
        lastName: "",
        idNumber: "",
        counselor: "",
        program: "",
        dayin: new Date()
    }

    addStudentObject.firstName = document.getElementById('editfirstName').value;
    addStudentObject.lastName = document.getElementById('editlastName').value;
    addStudentObject.idNumber = document.getElementById('editidNumber').value;
    addStudentObject.counselor = document.getElementById('editcounselor').value;
    addStudentObject.program = document.getElementById('editprogram').value;
    addStudentObject.dayin = document.getElementById('editdayin').value;

    console.log(addStudentObject);
    let putRequest = new XMLHttpRequest(); 
    putRequest.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
        }
    }
    putRequest.open("PUT", "/students", false);
    putRequest.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    let request = JSON.stringify(addStudentObject);
    putRequest.send(request);
    location.reload();


}
    
   

