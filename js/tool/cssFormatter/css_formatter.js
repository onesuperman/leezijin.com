$(function(){
	copyUtil("fz");
	changeSize();
})
function changeSize() {
	$("#cssjg").html("当前大小 " + $("#css-input").val().length + " 字节");
}

var zzl;
var lCSSCoder = {
	format: function(s) { //格式化代码
		zzl = "美化后 ";
		s = s.replace(/\s*([\{\}\:\;\,])\s*/g, "$1");
		s = s.replace(/;\s*;/g, ";"); //清除连续分号
		s = s.replace(/\,[\s\.\#\d]*{/g, "{");
		s = s.replace(/([^\s])\{([^\s])/g, "$1 {\n\t$2");
		s = s.replace(/([^\s])\}([^\n]*)/g, "$1\n}\n$2");
		s = s.replace(/([^\s]);([^\s\}])/g, "$1;\n\t$2");
		return s;
	},
	pack: function(s) { //压缩代码
		zzl = "压缩后 ";
		s = s.replace(/\/\*(.|\n)*?\*\//g, ""); //删除注释
		s = s.replace(/\s*([\{\}\:\;\,])\s*/g, "$1");
		s = s.replace(/\,[\s\.\#\d]*\{/g, "{"); //容错处理
		s = s.replace(/;\s*;/g, ";"); //清除连续分号
		s = s.match(/^\s*(\S+(\s+\S+)*)\s*$/); //去掉首尾空白
		return (s == null) ? "": s[1];

	}
};
function CSS(s) {
	getid("css-input").value = lCSSCoder[s](getid("css-input").value);
	var z = $("#css-input").val().length;
	if (z < 1024) {
		$("#cssjg").html(zzl + z + " 字节");
	} else {
		$("#cssjg").html(zzl + z / 1024 + " k");
	}
}
function getid(id) {
	return (typeof id == 'string') ? document.getElementById(id) : id
};

function c1(s) {
	var z = s.value.length;
	if (z < 1024) {
		$("#cssjg").html("当前大小 " + z + " 字节");
	} else {
		$("#cssjg").html("当前大小 " + z / 1024 + " k字节");
	}
}