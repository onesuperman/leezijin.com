function copyUtil(id){
	var clipboard = new Clipboard('#'+id);
	clipboard.on('success', function (e) {
		alert("success");
	});
	clipboard.on('error', function (e) {
		alert("error");
	});
	$("#"+id).click(function () {
		$(this).html("已复制√");
	});
	$("#"+id).mouseout(function () {
		$("#"+id).html("复制");
	});
}