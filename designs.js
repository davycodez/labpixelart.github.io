
var rows,columns;

// createTable function with two arguments, row and col respectively 
function createTable(row,col){

var table;

table = '';

//This outer loop creates the table row
for(var r = 0; r <= row; r++){

	table += '<tr>';

//This inside loop creates the table column
		for(var c = 0; c <= col; c++){

			table += '<td></td>';
		}

	table += '</tr>';
}


$('#pixelCanvas').prepend(table).show();

}

//makeGrid
function makeGrid() {

// select the number of [columns] and [rows] from the form to be created
rows = $('#inputWidth').val();
columns = $('#inputHeight').val();

//called createAble funcion with two parameters, rows and columns respectively
createTable(rows,columns);

// set the size of the table's row and colums
$('tr').css('height',columns);
$('td').css('width',rows);
}


// Declaration of the submit event for the form
$('#sizePicker').submit(function(event){

// called makeGrid function inside form submit event
	makeGrid();

// assign default color value to canvasColor 
 canvasColor = $('#colorPicker').val();

// re-assign canvasColor value to user's selected color
$('#colorPicker').change(function(){


	canvasColor = $(this).val();

})

//change grid color to selected color when a particular grid cell is clicked
$('td').click(function(evt){

  $(evt.target).css('background',canvasColor);

})
// cancel form submission after initial submission
	event.preventDefault();
    
})





