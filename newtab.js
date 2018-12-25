document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('note1').value = localStorage['note1'];
    document.getElementById('note2').value = localStorage['note2'];
    document.getElementById('note3').value = localStorage['note3'];
    document.getElementById('note4').value = localStorage['note4'];
    document.getElementById('note5').value = localStorage['note5'];
    document.getElementById('note6').value = localStorage['note6'];
    document.getElementById('note7').value = localStorage['note7'];
    document.getElementById('note8').value = localStorage['note8'];
    document.getElementById('note9').value = localStorage['note9'];
}, false);

document.addEventListener('DOMContentLoaded', function () {
	document.getElementById('note1').addEventListener('keydown', saveNote);
	document.getElementById('note2').addEventListener('keydown', saveNote);
	document.getElementById('note3').addEventListener('keydown', saveNote);
	document.getElementById('note4').addEventListener('keydown', saveNote);
	document.getElementById('note5').addEventListener('keydown', saveNote);
	document.getElementById('note6').addEventListener('keydown', saveNote);
	document.getElementById('note7').addEventListener('keydown', saveNote);
	document.getElementById('note8').addEventListener('keydown', saveNote);
	document.getElementById('note9').addEventListener('keydown', saveNote);

	//document.getElementsByClassName('clear1').addEventListener('click', clearNote('clear1'));

	document.getElementById("clear1").addEventListener("click", function(){
		document.getElementById('note1').value = ''; localStorage['note1'] = '';
	});
	document.getElementById("clear2").addEventListener("click", function(){
		document.getElementById('note2').value = ''; localStorage['note2'] = '';
	});
	document.getElementById("clear3").addEventListener("click", function(){
		document.getElementById('note3').value = ''; localStorage['note3'] = '';
	});
	document.getElementById("clear4").addEventListener("click", function(){
		document.getElementById('note4').value = ''; localStorage['note4'] = '';
	});
	document.getElementById("clear5").addEventListener("click", function(){
		document.getElementById('note5').value = ''; localStorage['note5'] = '';
	});
	document.getElementById("clear6").addEventListener("click", function(){
		document.getElementById('note6').value = ''; localStorage['note6'] = '';
	});
	document.getElementById("clear7").addEventListener("click", function(){
		document.getElementById('note7').value = ''; localStorage['note7'] = '';
	});
	document.getElementById("clear8").addEventListener("click", function(){
		document.getElementById('note8').value = ''; localStorage['note8'] = '';
	});
	document.getElementById("clear9").addEventListener("click", function(){
		document.getElementById('note9').value = ''; localStorage['note9'] = '';
	});

});

function saveNote () {
	var note1 = document.getElementById('note1').value; localStorage['note1'] = note1;
	var note2 = document.getElementById('note2').value; localStorage['note2'] = note2;
	var note3 = document.getElementById('note3').value; localStorage['note3'] = note3;
	var note4 = document.getElementById('note4').value; localStorage['note4'] = note4;
	var note5 = document.getElementById('note5').value; localStorage['note5'] = note5;
	var note6 = document.getElementById('note6').value; localStorage['note6'] = note6;
	var note7 = document.getElementById('note7').value; localStorage['note7'] = note7;
	var note8 = document.getElementById('note8').value; localStorage['note8'] = note8;
	var note9 = document.getElementById('note9').value; localStorage['note9'] = note9;
}