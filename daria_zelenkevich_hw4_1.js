function Student (first_name, last_name, age, grades) {
    this.first_name = first_name;
    this.last_name = last_name;
    this.age = age;
    this.grades = grades;

    this.getAvgGrade = function() {

        var sum = 0;

        for(var i = 0; i < this.grades.length; i++) {
            
            sum += this.grades[i];
        }

        return sum / this.grades.length;
    }

    Object.defineProperty(this, "getAvgGrade", {enumerable: false});

}


var students= [
                new Student('Vasya', 'Petrov', 25, [5, 5, 4, 4, 5]), 
                new Student('Petya', 'Ivanov', 26, [3, 5, 4, 4, 5]), 
                new Student('Sasha', 'Fedorov', 27, [2, 2, 3, 3, 1]),
];

console.log(students);


//Способ 1

var tbody;
var tr;
var td;

function createTable() {
    tbody = document.createElement('TBODY');

    for (var i = 0; i < students.length; i++) {

        tr = document.createElement('TR');
        tbody.appendChild(tr);

        for(var key in students[i]){

            td = document.createElement('td');

            tr.appendChild(td);

            td.appendChild(document.createTextNode(students[i][key]));

            td.style.border = "1px solid black";
            td.style.padding = "10px";
        }    
    }

    document.body.appendChild(tbody);

}

function clearTable() {
    tbody = document.body.querySelector('TBODY');
    var tdArr = tbody.querySelectorAll('TD');
    
    if (tbody == null) {
        return;
    }
    for (var i = 0; i < tdArr.length; i++) {

        tdArr[i].innerHTML = '';
   
    }
}


function loadTable() {
    tbody = document.body.querySelector('TBODY');

    if (tbody == null) {

        createTable();

    } else {

        firstTD = document.body.querySelector('TD');

        if(firstTD.innerHTML !== ''){
            return;
        }     
        
        document.body.removeChild(tbody);
        createTable();

    }
 
}

var loadigButton = document.createElement('BUTTON');
loadigButton.setAttribute("id", "loadigButton");
loadigButton.innerText = 'Загрузить таблицу';
document.body.appendChild(loadigButton);

var cleaningButton = document.createElement('BUTTON');
cleaningButton.setAttribute("id", "cleaningButton");
cleaningButton.innerText = 'Очистить таблицу';
document.body.appendChild(cleaningButton);


loadigButton.addEventListener('click', loadTable);
cleaningButton.addEventListener('click', clearTable);

















