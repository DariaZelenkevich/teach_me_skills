var table = $("#table_1");


$(table).append('<thead>');
var thead = $("#table_1 thead");

$(thead).append('<tr>');
var theadRow = $("thead tr");


$(theadRow).append('<td>First Name</td>');
$(theadRow).append('<td>Last Name</td>');
$(theadRow).append('<td>Age</td>');
$(theadRow).append('<td>Grades</td>');
$(theadRow).children().css({'border' : '2px solid black', 'padding' : '10px'});


function createTable(arr) {

    var table = $("#table_1");
    $(table).append('<tbody>');
    var tbody = $("#table_1 tbody");

    for (var i = 0; i < arr.length; i++) {

        $(tbody).append('<tr>');
        var tr =  $("tbody tr");

        $(tr[i]).append('<td>'+ arr[i].first_name + '</td>');
        $(tr[i]).append('<td>'+ arr[i].last_name + '</td>');
        $(tr[i]).append('<td>'+ arr[i].age + '</td>');
        $(tr[i]).append('<td>'+ arr[i].grades + '</td>');

        $(tr).children().css({'border' : '1px solid black', 'padding' : '10px'});

    }

}


function clearTable() {

    var tbody = $("#table_1 tbody");
    
    if (tbody.children('tr').length == 0) {

        return;
    }

    tbody.remove();
   
}


function loadTable(arr) {

    var tbody = $("#table_1 tbody");

    if (tbody.children('tr').length == 0) {

        createTable(arr);

    } 
    
    return;

}


function loadStudents() {
    var students = loadStudentsFromStorage ();

    if (students) {
        loadTable(students);
        return;
    }

    $.ajax({
        url: "/students.json",

        success: function( result ) {

        var students = (result);

        loadTable(students);
        saveStudentsToStorage(students);
        },


        error: function () {

            console.log('error');
        }
    });

}

function saveStudentsToStorage (s) {
    var stringifyedStudents = JSON.stringify(s);
    localStorage.setItem('students', stringifyedStudents);
}

function loadStudentsFromStorage () {
    var students = localStorage.getItem('students');
    return JSON.parse(students);
}


$("h5").before("<button id='loadigButton'>Загрузить таблицу</button>");

$("h5").before("<button id='cleaningButton'>Очистить таблицу</button>");


$('#loadigButton').bind('click', loadStudents);
$('#cleaningButton').bind('click', clearTable);