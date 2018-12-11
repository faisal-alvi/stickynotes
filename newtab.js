/*document.addEventListener('DOMContentLoaded', function()
	alert(jQuery);	
}, false);*/
//alert(jQuery);
 $("body").append('Test');

document.addEventListener('DOMContentLoaded', function () {
	// add event listener for buttons
	//document.getElementById('open').addEventListener('click', loadSites);
	//document.getElementById('extract').addEventListener('click', extractURLs);
	document.getElementById('savenote').addEventListener('click', saveNote);
	// focus on form field
	//document.getElementById('urls').focus();
});

function saveNote () {
	var note1 = document.getElementById('note1').value;
	localStorage['note1'] = note1;
	/*var note = chrome.storage.local.set({ 'note1' : '' }, function (){
		//callback
		alert('note saved successfully!');
	});*/
}

// load sites in new background tabs
function loadSites(e) {
	var urlschemes = ['http', 'https', 'file', 'view-source'];
	var urls = document.getElementById('urls').value.split('\n');
	var lazyloading = document.getElementsByName('lazyloading')[0].checked;

	for(var i=0; i<urls.length; i++){
		theurl = urls[i].trim();
		if(theurl != '') {
			if(urlschemes.indexOf(theurl.split(':')[0]) == -1) {
				theurl = 'http://' + theurl;
			}
			if(lazyloading && theurl.split(':')[0] != 'view-source' && theurl.split(':')[0] != 'file') {
				chrome.tabs.create({url: chrome.extension.getURL('lazyloading.html#') + theurl, selected: false}); 
			} else {
				chrome.tabs.create({url: theurl, selected: false}); 
			}
		}
	}
}

// extract urls from text
function extractURLs(e) {
	var text = document.getElementById('urls').value;

	var urls = '';
	var urlmatcharr;
	var urlregex = /\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?Â«Â»â€œâ€â€˜â€™]))/ig;
	while( (urlmatcharr = urlregex.exec(text)) !== null )
    {
        var match = urlmatcharr[0];
        urls += match + '\n';
    }

	document.getElementById('urls').value = urls;
}
