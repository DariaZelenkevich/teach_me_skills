function saveDataToStorage (data, itemName) {
	var stringifyedData = JSON.stringify(data);
	localStorage.setItem(itemName, stringifyedData);
}

function loadDataFromStorage (itemName) {
	var data = localStorage.getItem(itemName);
	return JSON.parse(data);
}

function getUrl(fileName) {
  return('/' + fileName + '.json')
}


function makeRequest(fileName, callback) {

	var url = getUrl(fileName);

	var data = loadDataFromStorage(fileName);

	if (data) {
		callback(data);

		return;
	}

	var xhr = new XMLHttpRequest;
	xhr.open('GET', url, true);

	xhr.onload = function () {

		var data = (JSON.parse(this.response));

		callback(data);

		saveDataToStorage(data, fileName);
			
	}


	xhr.onerror = function () {

		console.log('error');

	}

	xhr.send();

}


function createTable (data) {
	var table = document.getElementById('table');

	var thead = table.querySelector('THEAD');

	if (thead == null) {

		thead = document.createElement('THEAD');
		var theadRow = thead.insertRow();

		var th1 = document.createElement('TD');
		th1.appendChild(document.createTextNode("First Name"));
		theadRow.appendChild(th1);

		var th2 = document.createElement('TD');
		th2.appendChild(document.createTextNode("Last Name"));
		theadRow.appendChild(th2);

		var th3 = document.createElement('TD');
		th3.appendChild(document.createTextNode("Age"));
		theadRow.appendChild(th3);

		var th4 = document.createElement('TD');
		th4.appendChild(document.createTextNode("Phone"));
		theadRow.appendChild(th4);

		var th5 = document.createElement('TD');
		th5.appendChild(document.createTextNode("Department"));
		theadRow.appendChild(th5);

		table.appendChild(thead);

	}

	var tbody = table.querySelector('TBODY');

	if(tbody !== null) {
		
		clearTable();

	}

	var tbody = document.createElement('TBODY');

	for (var i = 0; i < data.length; i++) {

		var tr = tbody.insertRow();
		tbody.appendChild(tr);

		var td1 = document.createElement('TD');
		td1.appendChild(document.createTextNode(data[i].first_name));
		tr.appendChild(td1);

		var td2 = document.createElement('TD');
		td2.appendChild(document.createTextNode(data[i].last_name));
		tr.appendChild(td2);

		var td3 = document.createElement('TD');
		td3.appendChild(document.createTextNode(data[i].age));
		tr.appendChild(td3);

		var td4 = document.createElement('TD');
		td4.appendChild(document.createTextNode(data[i].phone));
		tr.appendChild(td4);

		var td5 = document.createElement('TD');
		td5.appendChild(document.createTextNode(data[i].department_id));
		tr.appendChild(td5);

	}

	table.appendChild(tbody);

}

function clearTable() {

	var table = document.querySelector('TABLE');
	var tbody = table.querySelector('TBODY');

	table.removeChild(tbody);
 
}

function createTree(arr) {

	var tree = document.createElement('ul');
	tree.setAttribute('id', 'tree');
	document.body.insertBefore(tree, document.body.firstChild);

	for(var i = 0; i < arr.length; i++) {

		if(arr[i].parent_id == null){

			var headNode = document.createElement('li');
			headNode.setAttribute('employee_id', arr[i].id);
			headNode.innerText = arr[i].name;
			

			for(var j = 0; j < arr.length; j++) {

				if(arr[j].parent_id == arr[i].id) {
					var deputyList = document.createElement('ul');
					deputyList.setAttribute('class', 'deputy_list');
					deputyList.setAttribute('hidden', true);


					var deputyNode = document.createElement('li');
					deputyNode.setAttribute('employee_id', arr[j].id);
					deputyNode.innerText =  arr[j].name;

					for(var n = 0; n < arr.length; n++) {

						if(arr[n].parent_id == arr[j].id){
							var employeeList = document.createElement('ul');
							employeeList.setAttribute('class', 'employee_list');
							employeeList.setAttribute('hidden', true);


							var employeeNode = document.createElement('li');
							employeeNode.setAttribute('employee_id', arr[n].id);
							employeeNode.innerText =  arr[n].name;

			
							employeeList.appendChild(employeeNode);
							deputyNode.appendChild(employeeList);
						}

					}
			
					deputyList.appendChild(deputyNode);
					headNode.appendChild(deputyList);
				}

			}
		
			tree.appendChild(headNode);	

		}

	}

	var treeLis = tree.getElementsByTagName('li');

	for (var i = 0; i < treeLis.length; i++) {
		var li = treeLis[i];

		var span = document.createElement('span');
		li.insertBefore(span, li.firstChild);
		span.appendChild(span.nextSibling);
	}
}




document.addEventListener("DOMContentLoaded",function () {

	makeRequest('employee', createTree);

	tree.onclick = function(event) {

		var target = event.target;

		var employeeID = target.parentNode.getAttribute('employee_id');


		if (employeeID.length < 2) {
			employeeID = '0' + employeeID;
		} 


		makeRequest(employeeID, createTable);

		var childrenContainer = target.parentNode.getElementsByTagName('ul')[0];
		if (!childrenContainer) return; 

		childrenContainer.hidden = !childrenContainer.hidden;

	}
  
});




