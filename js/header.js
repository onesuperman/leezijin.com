addHeader("header");
function addHeader(id){
	var text = "";
	text += "<link rel='shortcut icon' href='../../img/favicon.ico' type='image/vnd.microsoft.icon'>";
	text += "<link rel=\"stylesheet\" type=\"text/css\" href=\"../../css/header.css\" />";
	text += "<div class=\"navigation-up\">";
	text += "	<div class=\"navigation-inner\">";
	text += "		<div class=\"navigation-v3\">";
	text += "			<ul>";
	text += "				<li class=\"\" _t_nav=\"home\">";
	text += "					<h2>";
	text += "						<a href=\"../../index.html\">首页</a>";
	text += "					</h2>";
	text += "				</li>";
	text += "				<li class='' >";
	text += "					<h2>";
	text += "						<a title='子晋的博客' target='_blank' href='https://blog.leezijin.com'>博客</a>";
	text += "					</h2>";
	text += "				</li>";
	text += "				<li class='nav-up-selected-inpage' _t_nav='tool'>";
	text += "					<h2>";
	text += "						<a title='子晋的工具'>工具</a>";
	text += "					</h2>";
	text += "				</li>";
	text += "			</ul>";
	text += "		</div>";
	text += "	</div>";
	text += "</div>";
	text += "<div class=\"navigation-down\">";
	text += "	<!-- Tool工具展示 -->";
	text += "	<div id=\"tool\" class=\"nav-down-menu menu-1 men\" style=\"display: none;\" _t_nav=\"tool\">";
	text += "		<!-- Tool工具展示 -->";
	text += "		<div class=\"navigation-down-inner\">";
	text += "			<dl style=\"margin-left: 50px;\">";
	text += "				<dt>WEB</dt>";
	text += "				<dd>";
	text += "					<a class=\"link\" href=\"compare_code.html\">文本对比工具</a>";
	text += "				</dd>";
	text += "				<dd>";
	text += "					<a class=\"link\" href=\"css_formatter.html\">CSS格式化工具</a>";
	text += "				</dd>";
	text += "				<dd>";
	text += "					<a class=\"link\" href=\"js_formatter.html\">JS格式化工具</a>";
	text += "				</dd>";
	text += "				<dd>";
	text += "					<a class=\"link\" href=\"json_formatter.html\">JSON格式化工具</a>";
	text += "				</dd>";
	text += "			</dl>";
	text += "		</div>";
	text += "	</div>";
	text += "</div>";
	$("#"+id).html(text);
	addHeaderJs();
}

function addHeaderJs(){
	var qcloud={};
	$('[_t_nav]').hover(function(){
		var _nav = $(this).attr('_t_nav');
		clearTimeout( qcloud[ _nav + '_timer' ] );
		qcloud[ _nav + '_timer' ] = setTimeout(function(){
			$('[_t_nav]').each(function(){
				$(this)[ _nav == $(this).attr('_t_nav') ? 'addClass':'removeClass' ]('nav-up-selected');
			});
			$('#'+_nav).stop(true,true).slideDown(200);
		}, 150);
	},function(){
		var _nav = $(this).attr('_t_nav');
		clearTimeout( qcloud[ _nav + '_timer' ] );
		qcloud[ _nav + '_timer' ] = setTimeout(function(){
			$('[_t_nav]').removeClass('nav-up-selected');
			$('#'+_nav).stop(true,true).slideUp(200);
		}, 150);
	});
	$(".navigation-v3 li").click(function(){
		$(".navigation-v3 li").css("background","#cd2cb9");
		$(this).css("background","#920681");
	})
}