var selectedRow = null
var myData2 = [
    {"fullName" : "Apollo", "cost" : 1000, "budget" : 1200},
    {"fullName" : "Hermes", "cost" : 10000, "budget" : 11000},
    {"fullName" : "Zeus", "cost" : 100000, "budget" : 110000}
    ]
    
    
    var currentDealId = myData.length;

    localStorage.setItem("myData2", "test")
    
    var myDataTest2 = localStorage.getItem("myData2")
	


function onCreateAddData3() {
	
     var formData = {};
	 for(var i = 0; i < myData2.length; i++){
		   formData["fullName"] =  myData2[i]["fullName"];
    formData["cost"] =  myData2[i]["cost"];
    formData["budget"] =   myData2[i]["budget"];

	insertNewRecord(formData);
	}
	
  
  
}


function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["fullName"] = document.getElementById("fullName").value;
    formData["cost"] = document.getElementById("cost").value;
    formData["budget"] = document.getElementById("budget").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("budgetList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.cost;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.budget;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                        <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("fullName").value = "";
    document.getElementById("cost").value = "";
    document.getElementById("budget").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("cost").value = selectedRow.cells[1].innerHTML;
    document.getElementById("budget").value = selectedRow.cells[2].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.fullName;
    selectedRow.cells[1].innerHTML = formData.cost;
    selectedRow.cells[2].innerHTML = formData.budget;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("budgetList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("fullName").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}