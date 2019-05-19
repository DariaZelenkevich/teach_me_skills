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
var tbody = document.createElement('TBODY');

for (var i = 0; i < students.length; i++) {

    var tr = document.createElement('TR');
    tbody.appendChild(tr);

    for(var key in students[i]){

        var td = document.createElement('td');

        tr.appendChild(td);

        td.appendChild(document.createTextNode(students[i][key]));

        td.style.border = "1px solid black";
        td.style.padding = "10px";
    }    
}

document.body.appendChild(tbody);


//Пустая строка между таблицами
var br = document.createElement('BR');
document.body.appendChild(br);



//Способ 2
var tbody2 = document.createElement('TBODY');
for (var i = 0; i < students.length; i++) {

    var tr = "<tr>";

    tr += "<td>" + students[i].first_name + "</td>" + "<td>" + students[i].last_name + "</td>"  + "<td>" + students[i].age + "</td>" + "<td>" + students[i].getAvgGrade() + "</td></tr>";

    tbody2.innerHTML += tr;
}

var td = tbody2.getElementsByTagName('TD');


for (var j = 0; j < Object.keys(td).length; j++) {

    td[j].style.border = "1px solid black";
    td[j].style.padding = "10px";
}

document.body.appendChild(tbody2);










