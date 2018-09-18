layui.use(['element', 'layer','laypage'], function () {
					  var element = layui.element;
					  var layer = layui.layer;
					  var laypage = layui.laypage;
					  var $ = layui.jquery;
					  // 分页
					  laypage({
					    cont: 'page'
					    ,pages: 100 //总页数
					    ,groups: 5 //连续显示分页数
					    ,jump: function(obj, first) { //obj（当前分页的所有选项值）、first（是否首次，一般用于初始加载的判断）
						 
								var curr = obj.curr;
								/*console.log(curr); //得到当前页，以便向服务端请求对应页的数据。
								console.log(obj.limit); //得到每页显示的条数*/
								if(!first) {
									//layer.msg('第 '+ obj.curr +' 页');
								}
							}
					  });
});