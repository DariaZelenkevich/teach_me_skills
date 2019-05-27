function Student (first_name, last_name, age, grades) {
    var _first_name = first_name;
    var _last_name = last_name;
    var _age = age;
    var _grades = grades;

    this.getFirstName = function () {
        return _first_name;
    }

    this.getLastName = function () {
        return _last_name;
    }

    this.getAge = function () {
        return _age;
    }

    this.getGrades = function () {
        return _grades;
    }

    this.getAvgGrade = function() {

        var sum = 0;

        for(var i = 0; i < _grades.length; i++) {
            
            sum += _grades[i];
        }

        return sum / _grades.length;
    }

}


var students= [
                new Student('Vasya', 'Petrov', 25, [5, 5, 4, 4, 5]), 
                new Student('Petya', 'Ivanov', 26, [3, 5, 4, 4, 5]), 
                new Student('Sasha', 'Fedorov', 27, [2, 2, 3, 3, 1]),
];

console.log(students);


var table;
var thead;
var tbody;
var tr;


function createTable(id) {

    table = document.getElementById(id);
    thead = table.querySelector('THEAD');

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


    tbody = document.createElement('TBODY');

    for (var i = 0; i < students.length; i++) {

        tr = tbody.insertRow();
        tbody.appendChild(tr);

        var td1 = document.createElement('TD');
        td1.appendChild(document.createTextNode(students[i].getFirstName()));
        tr.appendChild(td1);

        var td2 = document.createElement('TD');
        td2.appendChild(document.createTextNode(students[i].getLastName()));
        tr.appendChild(td2);

        var td3 = document.createElement('TD');
        td3.appendChild(document.createTextNode(students[i].getAge()));
        tr.appendChild(td3);

        var td4 = document.createElement('TD');
        td4.appendChild(document.createTextNode(students[i].getGrades()));
        tr.appendChild(td4);

    }

    table.appendChild(tbody);

    var tdArr = tbody.querySelectorAll('TD');
    for (var i = 0; i < tdArr.length; i++) {

        tdArr[i].style.border = "1px solid black";
        tdArr[i].style.padding = "10px"; 
   
    }
}

function clearTable(id) {
    table = document.getElementById(id);
    tbody = table.querySelector('TBODY');
    var tdArr = tbody.querySelectorAll('TD');
    
    if (tbody == null) {
        return;
    }
    for (var i = 0; i < tdArr.length; i++) {

        tdArr[i].innerHTML = '';
   
    }
}


function loadTable(id) {
    table = document.getElementById(id);
    tbody = table.querySelector('TBODY');

    if (tbody == null) {

        createTable(id);

    } else {

        firstTD = tbody.querySelector('TD');

        if(firstTD.innerHTML !== ''){
            return;
        }     
        
        table.removeChild(tbody);
        createTable(id);

    }
 
}

var loadigButton = document.createElement('BUTTON');
loadigButton.setAttribute("id", "loadigButton");
loadigButton.innerText = 'Загрузить таблицу';
document.body.insertBefore(loadigButton, document.body.children[1]);

var cleaningButton = document.createElement('BUTTON');
cleaningButton.setAttribute("id", "cleaningButton");
cleaningButton.innerText = 'Очистить таблицу';
document.body.insertBefore(cleaningButton, document.body.children[2]);


loadigButton.addEventListener('click', loadSelectedTable);
cleaningButton.addEventListener('click', clearSelectedTable);


function loadSelectedTable() {
    var selector = document.getElementById('table_select');
    var value = selector[selector.selectedIndex].value;

    loadTable(value);
}

function clearSelectedTable() {
    var selector = document.getElementById('table_select');
    var value = selector[selector.selectedIndex].value;

    clearTable(value);
}



















