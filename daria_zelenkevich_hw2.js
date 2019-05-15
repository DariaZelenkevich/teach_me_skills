/* Задание 0
создать массив объектов студентов (минимум 3)
каждого студента есть 4 поля -- first_name, last_name, age, grades. Grades -- массив из 5 чисел-оценок по 5-бальной шкале оценок
*/

var students = [
                {first_name: 'Vasya',
                last_name: 'Petrov',
                age: '25',
                grades: [5, 5, 4, 4, 5]}, 

                {first_name: 'Petya',
                last_name: 'Ivanov',
                age: '26',
                grades: [3, 5, 4, 4, 5]},
                
                {first_name: 'Sasha',
                last_name: 'Fedorov',
                age: '27',
                grades: [2, 2, 3, 3, 1]}
];



// Задание 1
// написать функцию logStudents, которая принимаем массив студентов в качестве аргумента
// 
    // с помощью метода forEach пробежаться по массиву studentsArr
    // внутри функции с помощью for...in пробегаемся по параметрам объекта и выводим в консоль ЗНАЧЕНИЕ параметра

function logStudents (studentsArr) {

    studentsArr.forEach(function(student) {

        for(var key in student){

            console.log(student[key]);

        }    
    });
}



// Задание 2.1
// написать функцию getAvg, которая принимаем массив чисел в качестве аргумента и возвращает среднее арифметическое


function getAvg(numbersArr) {

    var sum = 0;

    for (var i = 0; i < numbersArr.length; i++) {

        sum += numbersArr[i];
    }

    return sum / numbersArr.length;
}



// Задание 2.2
// написать функцию getGoodStudents, которая принимаем массив студентов в качестве аргумента и возвращает новый массив студентов
//
    // с помощью метода filter пробежаться по массиву studentsArr
    // в новый массив вернуть тех студентов, средняя оценка которых больше либо равна 4
    // вернуть новый массив
    // подсказка: используйте функцию getAvg
// можно вывести результат выполения getGoodStudents в консоль, чтобы было нагляднее для вас

function getGoodStudents (studentsArr) {

    return studentsArr.filter(function(student) {

        return getAvg(student.grades) >= 4;

    });

}

console.log(getGoodStudents(students));



// Задание3
// написать функцию getStudentsDescription, которая принимаем массив студентов в качестве аргумента и возвращает новый массив строк
//
    // с помощью метода map пробежаться по массиву studentsArr
    // в новый массив вернуть строку вида "ИМЯ_СТУДЕНТА ФАМИЛИЯ_СТУДЕНТА, ВОЗРАСТ_СТУДЕНТА лет, средний балл СРЕДНИЙ_БАЛЛ" студентов, 
    //средняя оценка которых больше либо равна 4
    // вернуть новый массив
    // подсказка: используйте функцию getAvg

function getStudentsDescription (studentsArr) {

        var studentsDescription = studentsArr.filter(function(student) {return getAvg(student.grades) >= 4} ).map(function(student) {

        return student.first_name + ' ' + student.last_name + ', ' + student.age + ' лет, ' + 'средний балл ' + getAvg(student.grades);

    });
    
    return studentsDescription;
}



// Задание4
// написать функцию getStudentsDescription, которая принимаем массив студентов в качестве аргумента и возвращает новый массив строк
//
    // с помощью метода filter пробежаться по массиву studentsArr
    // в новый массив вернуть тех студентов, у которых каждая оценка больше 3
    // вернуть новый массив
    // подсказка: используйте функцию every внутри filter

function findNumberMoreThenThree(number) {

    return number > 3;
}

function getBadStudents (studentsArr) {

    var badStudents = studentsArr.filter(function (student) {

        var result = student.grades.every(findNumberMoreThenThree);

        return result == true;

    });

    return badStudents;

}

console.log(getBadStudents(students));



// Задание5*
// написать функцию getStudentsDescription, которая принимаем массив студентов в качестве аргумента и возвращает новый массив строк
//
    // с помощью метода reduce пробежаться по массиву studentsArr
    // функция getGroupAverageGrade должна вернуть средннее арифметическое оценок по группе 
    //(здесь хотелось бы увидеть среднее арифметическое средних арифметических каждого студента)


function getGroupAverageGrade (studentsArr) {

    var groupAverageList = studentsArr.map(function(student) {

        return getAvg(student.grades);
    });

    var groupAverageGrade = groupAverageList.reduce(function(averegeSum, currentItem) {

        averegeSum = averegeSum + currentItem;

        return averegeSum;

    }) / groupAverageList.length;

    return groupAverageGrade;
}