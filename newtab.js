document.addEventListener('DOMContentLoaded', function() {
	//alert('hey');
    //alert(localStorage['note1']);
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
//alert(jQuery);
// $("body").append('Test');


document.addEventListener('DOMContentLoaded', function () {
	// add event listener for buttons
	//document.getElementById('open').addEventListener('click', loadSites);
	//document.getElementById('extract').addEventListener('click', extractURLs);
	document.getElementById('savenote').addEventListener('click', saveNote);
	// focus on form field
	//document.getElementById('urls').focus();
	document.getElementById('note1').addEventListener('keydown', saveNote);
	document.getElementById('note2').addEventListener('keydown', saveNote);
	document.getElementById('note3').addEventListener('keydown', saveNote);
	document.getElementById('note4').addEventListener('keydown', saveNote);
	document.getElementById('note5').addEventListener('keydown', saveNote);
	document.getElementById('note6').addEventListener('keydown', saveNote);
	document.getElementById('note7').addEventListener('keydown', saveNote);
	document.getElementById('note8').addEventListener('keydown', saveNote);
	document.getElementById('note9').addEventListener('keydown', saveNote);

});




function saveNote () {
    //alert('hey');
	var note1 = document.getElementById('note1').value; localStorage['note1'] = note1;
	var note2 = document.getElementById('note2').value; localStorage['note2'] = note2;
	var note3 = document.getElementById('note3').value; localStorage['note3'] = note3;
	var note4 = document.getElementById('note4').value; localStorage['note4'] = note4;
	var note5 = document.getElementById('note5').value; localStorage['note5'] = note5;
	var note6 = document.getElementById('note6').value; localStorage['note6'] = note6;
	var note7 = document.getElementById('note7').value; localStorage['note7'] = note7;
	var note8 = document.getElementById('note8').value; localStorage['note8'] = note8;
	var note9 = document.getElementById('note9').value; localStorage['note9'] = note9;
	/*var note = chrome.storage.local.set({ 'note1' : '' }, function (){
		//callback
		alert('note saved successfully!');
	});*/
}