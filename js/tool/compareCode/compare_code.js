$(document).ready(function () {
	function download_content(a, side) {
		var txt = $('#mergely').mergely('get', side);
		var datauri = "data:plain/text;charset=UTF-8," + encodeURIComponent(txt);
		a.setAttribute('download', side + ".txt");
		a.setAttribute('href', datauri);
	}
	document.getElementById('save-lhs').addEventListener('mouseover', function () { download_content(this, "lhs"); }, false);
	document.getElementById('save-rhs').addEventListener('mouseover', function () { download_content(this, "rhs"); }, false);
	document.getElementById('ignorews').addEventListener('change', function () {
		$('#mergely').mergely('options', { ignorews: this.checked });
	}, false);

});