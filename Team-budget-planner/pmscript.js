var selectedRow = null


var myData2 = [
    {"fullName" : "Microsoft", "pName" : "Apollo", "cost" : 1000, "city" : "CA"},
    {"fullName" : "Intel", "pName" : "Hermes", "cost" : 10000, "city" : "WA"},
    {"fullName" : "Apple", "pName" : "Zeus", "cost" : 100000, "city" : "TX"}
    ]
    
    
    var currentDealId = myData.length;  
    

    localStorage.setItem("myData2", "test")
    
    var myDataTest2 = localStorage.getItem("myData2")
	


function onCreateAddData2() {
	
     var formData = {};
	 for(var i = 0; i < myData.length; i++){
		   formData["fullName"] =  myData2[i]["fullName"];
    formData["pName"] =  myData2[i]["pName"];
    formData["cost"] =   myData2[i]["cost"];
    formData["city"] =   myData2[i]["city"];
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
    formData["pName"] = document.getElementById("pName").value;
    formData["cost"] = document.getElementById("cost").value;
    formData["city"] = document.getElementById("city").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("vendorList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.pName;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.cost;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.city;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("fullName").value = "";
    document.getElementById("pName").value = "";
    document.getElementById("cost").value = "";
    document.getElementById("city").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("pName").value = selectedRow.cells[1].innerHTML;
    document.getElementById("cost").value = selectedRow.cells[2].innerHTML;
    document.getElementById("city").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.fullName;
    selectedRow.cells[1].innerHTML = formData.pName;
    selectedRow.cells[2].innerHTML = formData.cost;
    selectedRow.cells[3].innerHTML = formData.city;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("vendorList").deleteRow(row.rowIndex);
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