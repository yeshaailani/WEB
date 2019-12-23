/*eslint-env browser*/

var employee = [
    ["Yesha", "Vice President", 0001],
    ["Yesha1", "Director ", 0002],
    ["Yesha2", "Senior Manager", 0003],
    ["Yesha3", "Manager", 0004],
    ["Yesha4", "Software Developer", 0005],
]


function addNewRow(addrow) {
    "use strict";
    var tb , row, text, button, unit;

    tb = document.getElementsByTagName("tbody").item(0);
    row = document.createElement("tr");

    addrow.forEach(element => {
        unit = document.createElement("td");
        text = document.createTextNode(element);
        unit.appendChild(text);
        row.appendChild(unit);
    });

    unit = document.createElement("td");
    button = document.createElement("Button")
    text = document.createTextNode("Delete")
    button.classList.add("button");
    button.appendChild(text);
    unit.appendChild(button);
    row.appendChild(unit);
    button.setAttribute('onclick', 'removeRow(this)');
    tb.appendChild(row);
}

function display() {
    "use strict";
    employee.forEach(employee => {
        addNewRow(employee);
    });
}

function removeRow(clickButton) {
    "use strict";
    var tb = document.getElementsByTagName("tbody").item(0);
    var rowIndex = clickButton.parentNode.parentNode.rowIndex - 1;
    tb.deleteRow(rowIndex);
    employee.splice(rowIndex, 1);
    document.getElementById("count").innerHTML = employee.length;
    console.log(employee)
    console.log(employee.length)
   
    
}

function validate() {
    "use strict";

    let Name = document.getElementById("name").value;
	let Title = document.getElementById("title").value;
    let Extension = document.getElementById("extension").value;
    console.log(Name,Title,Extension)
    var flag = true;

    if(!Name || !Title || !Extension) {
        flag = false;
    }
    
	
	if(!Name)
	document.getElementById("name_error").style.display = "inline-block";
	else
	document.getElementById("name_error").style.display = "none";
    
	if(!Title)
	document.getElementById("title_error").style.display = "inline-block";
	else
	document.getElementById("title_error").style.display = "none";
	
	if(!Extension)
	document.getElementById("extension_error").style.display = "inline-block";
	else
    document.getElementById("extension_error").style.display = "none";
    
    if (!(Name && Title && Extension)) return;

    return flag;

}



window.addEventListener("load", function() {
    "use strict";

    document.getElementById("count").innerHTML = employee.length;
    console.log(employee.length)
    console.log(employee)
    display
    ();
   
    var submit = document.getElementById("submit");
    submit.addEventListener("click", function() {
        if(validate()) {
            let Name = document.getElementById("name").value;
	        let Title = document.getElementById("title").value;
            let Extension = document.getElementById("extension").value;
            console.log(name,title,extension)
  
            var new_employee = [Name, Title, Extension];
            employee.push(new_employee);
            addNewRow(new_employee);
            document.getElementById("count").innerHTML = employee.length;
            console.log(employee.length)
            console.log(employee)
            document.getElementById("name").value = ''
            document.getElementById("title").value = ''
            document.getElementById("extension").value = ''
        }
    });
});
