$(function(){
	copyUtil("fz");
	$("#jsjg").html("当前大小 " + $("#content").val().length + " 字节");
});
function changeSize() {
	var z = $("#content").val().length;
	if (z < 1024) {
		$("#jsjg").html("当前大小 " + z + " 字节");
	} else {
		$("#jsjg").html("当前大小 " + z / 1024 + " k字节");
	}
}    
if (window.localStorage && localStorage.getItem("content2format")) {
	document.getElementById('content').value = localStorage.getItem("content2format");
	localStorage.setItem("content2format", "");
}

function sj(s) {
	$("#tabsize").val(s);
	$("#sels").text(s + "个空格缩进");
}
function Trim(str) {
	return str.replace(/(^\s*)|(\s*$)/g, "");
}
function do_js_beautify() {           
	var source = Trim($('#content').val()),
output,
opts = {};
	if (looks_like_html(source)) {
		output = html_beautify(source, opts);
	} else {
		output = js_beautify(source, opts);
	}
	$('#content').val(output);
	changeSize();
}
function looks_like_html(source) {
	var trimmed = source.replace(/^[ \t\n\r]+/, '');
	return trimmed && (trimmed.substring(0, 1) === '<');
}

function pack_js(base64) {
	var input = document.getElementById('content').value.replace(/^\s+|\s+$/g, "");
	if (input == '') {
		alert('请输入需要压缩的内容!');
		return;
	}
	var packer = new Packer;
	if (base64) {
		var output = packer.pack(input, 1, 0);
	} else {
		var output = packer.pack(input, 0, 0);
	}
	document.getElementById('content').value = output;
	changeSize();
}
function Empty() {
	document.getElementById('content').value = '';
	document.getElementById('content').select();
}

function rechange() {
	document.getElementById('content').value = document.getElementById('content').value.replace(/document.writeln\("/g, "").replace(/"\);/g, "").replace(/\\\"/g, "\"").replace(/\\\'/g, "\'").replace(/\\\//g, "\/").replace(/\\\\/g, "\\")
}
function changeIt() {
	document.getElementById('content').value = "document.writeln(\"" + document.getElementById('content').value.replace(/\\/g, "\\\\").replace(/\\/g, "\\/").replace(/\'/g, "\\\'").replace(/\"/g, "\\\"").split('\n').join("\");\ndocument.writeln(\"") + "\");"
}

var ischange = false;
function change() {
	if (!ischange) {
		changeIt();

	} else {
		rechange();
	}
	ischange = !ischange;
}

function GetFocus() {
	document.getElementById('content').focus();
}

function decode() {
	var code = document.getElementById('content').value;
	code = code.replace(/^eval/, '');
	document.getElementById('content').value = eval(code);
	changeSize();
}
