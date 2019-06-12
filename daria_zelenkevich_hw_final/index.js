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

	clearTable();

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

	if(tbody !== null) {
		
		table.removeChild(tbody);

	}

}

function createTreeNodeList(arr) {

	var clonedArray = JSON.parse(JSON.stringify(arr));


    for (var i = 0; i < clonedArray.length; i++) {


        if (clonedArray[i].parent_id !== null) {


            for (var j = 0; j < clonedArray.length; j++) {

                if (clonedArray[j].id === clonedArray[i].parent_id) {

                    if (!clonedArray[j].children) {
                        clonedArray[j].children = [];
                    }

                    clonedArray[j].children.push(clonedArray[i]);
                }
            }
        }
	}
    
    return clonedArray.filter(function (val) {
        return val.parent_id === null; 
	});
	
}

function createTree(data) {
	
	var treeArr = createTreeNodeList(data);

    var treeRoot = document.createElement('ul');

	addEl(treeRoot, treeArr);
	
	var container = document.getElementById('container');

    container.insertBefore(treeRoot, container.firstChild);

    function addEl(parent, children) {
    
        for (var i = 0; i < children.length; i++) {
			var li = document.createElement('li');
			li.setAttribute('employee_id', children[i].id);
			var span = document.createElement('SPAN');
  
			span.innerText = children[i].name;
	  		li.appendChild(span);
            parent.appendChild(li);

            if (children[i].children) {
				var ul = document.createElement('ul');
				ul.setAttribute('style', 'display: none;');
				addEl(ul, children[i].children);
				li.appendChild(ul);
			}
        }
    }
} 

function rollUpTree() {
	var tree = document.getElementById('tree');
	var nodes = tree.querySelectorAll('ul');
	for(var i = 0; i < nodes.length; i++) {

		nodes[i].setAttribute('style', 'display: none;');

	}
}


function clearAll() {

	clearTable();
	localStorage.clear();
	rollUpTree();
}


var clearButton = document.createElement('BUTTON');
clearButton.setAttribute('type', 'button');
clearButton.setAttribute('id', 'button');
clearButton.innerText = 'Очистить';
clearButton.addEventListener('click', clearAll);


document.body.appendChild(clearButton);


window.onload = function () {
	makeRequest('employee', createTree);


	var tree = document.querySelector('ul');
	tree.setAttribute('id', 'tree');


	tree.onclick = function(event) {

		var target = event.target;


		var employeeID = target.parentNode.getAttribute('employee_id');

		if (employeeID.length < 2) {
			employeeID = '0' + employeeID;
		} 


		makeRequest(employeeID, createTable);


		var childrenContainer = target.parentNode.getElementsByTagName('ul')[0];
		if (!childrenContainer) return;
		childrenContainer.style.display = childrenContainer.style.display ? '' : 'none';

	}
}







