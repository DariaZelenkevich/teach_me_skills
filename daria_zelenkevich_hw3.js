/* Задание 0
создать массив объектов студентов (минимум 3)
каждого студента есть 4 поля -- first_name, last_name, age, grades. Grades -- массив из 5 чисел-оценок по 5-бальной шкале оценок
*/

function Student (first_name, last_name, age, grades) {
    this.first_name = first_name;
    this.last_name = last_name;
    this.age = age;
    this.grades = grades;

    this.getAvgGrade = function() {

        for(var i = 0; i < this.grades.length; i++) {
            sum += this.grades[i];
        }

        return sum / this.grades.length;
    }
}

var students= [
                new Student('Vasya', 'Petrov', 25, [5, 5, 4, 4, 5]), 
                new Student('Petya', 'Ivanov', 26, [3, 5, 4, 4, 5]), 
                new Student('Sasha', 'Fedorov', 27, [2, 2, 3, 3, 1]),
            ];

console.log(students);