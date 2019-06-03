var table = document.getElementById("table_1");
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
    th4.appendChild(document.createTextNode("Grades"));
    theadRow.appendChild(th4);

    table.appendChild(thead);

    var thArr = thead.querySelectorAll('TD');
    for (var i = 0; i < thArr.length; i++) {

        thArr[i].style.border = "2px solid black";
        thArr[i].style.padding = "10px";

    }
}


function createTable(arr) {

    var table = document.getElementById("table_1");
    var tbody = document.createElement('TBODY');

    for (var i = 0; i < arr.length; i++) {

        var tr = tbody.insertRow();
        tbody.appendChild(tr);

        var td1 = document.createElement('TD');
        td1.appendChild(document.createTextNode(arr[i].first_name));
        tr.appendChild(td1);

        var td2 = document.createElement('TD');
        td2.appendChild(document.createTextNode(arr[i].last_name));
        tr.appendChild(td2);

        var td3 = document.createElement('TD');
        td3.appendChild(document.createTextNode(arr[i].age));
        tr.appendChild(td3);

        var td4 = document.createElement('TD');
        td4.appendChild(document.createTextNode(arr[i].grades));
        tr.appendChild(td4);

    }

    table.appendChild(tbody);

    var tdArr = tbody.querySelectorAll('TD');
    for (var i = 0; i < tdArr.length; i++) {

        tdArr[i].style.border = "1px solid black";
        tdArr[i].style.padding = "10px"; 
   
    }
}


function clearTable() {

    var table = document.getElementById("table_1");
    var tbody = table.querySelector('TBODY');
    
    if (tbody == null) {

        return;
    }

    table.removeChild(tbody);
   
}


function loadTable(arr) {

    var table = document.getElementById("table_1");
    var tbody = table.querySelector('TBODY');

    if (tbody == null) {

        createTable(arr);

    } 
    
    return;

}


function loadStudents() {

    var xhr = new XMLHttpRequest;
    xhr.open('GET', 'students.json', true);

    xhr.onload = function () {

        var students = (JSON.parse(this.response));
        loadTable(students);

    }


    xhr.onerror = function () {

      console.log('error');

    }

    xhr.send();

}

var loadingButton = document.createElement('BUTTON');
loadingButton.setAttribute("id", "loadigButton");
loadingButton.innerText = 'Загрузить таблицу';
document.body.insertBefore(loadingButton, document.body.children[0]);


var cleaningButton = document.createElement('BUTTON');
cleaningButton.setAttribute("id", "cleaningButton");
cleaningButton.innerText = 'Очистить таблицу';
document.body.insertBefore(cleaningButton, document.body.children[1]);


loadingButton.addEventListener('click', loadStudents);
cleaningButton.addEventListener('click', clearTable);