layui.use(['element', 'layer','laypage'], function () {
					  var element = layui.element;
					  var layer = layui.layer;
					  var laypage = layui.laypage;
					  var $ = layui.jquery;
					 //执行一个laypage实例
					  laypage({
					    cont: 'page'
					    ,pages: 100 //总页数
					    ,groups: 5 //连续显示分页数
					  });

					   //添加用户
					    function addNews(edit){
					        var index = layui.layer.open({
					            title : "添加信息",
					            type : 2,
					            content : "admin_userform.html",
					            success : function(layero, index){
					                // var body = layui.layer.getChildFrame('body', index);
					                // if(edit){
					                //     body.find(".newsName").val(edit.newsName);
					                //     body.find(".abstract").val(edit.abstract);
					                //     body.find(".thumbImg").attr("src",edit.newsImg);
					                //     body.find("#news_content").val(edit.content);
					                //     body.find(".newsStatus select").val(edit.newsStatus);
					                //     body.find(".openness input[name='openness'][title='"+edit.newsLook+"']").prop("checked","checked");
					                //     body.find(".newsTop input[name='newsTop']").prop("checked",edit.newsTop);
					                //     form.render();
					                // }
					                setTimeout(function(){
					                    layui.layer.tips('点击此处返回用户列表', '.layui-layer-setwin .layui-layer-close', {
					                        tips: 3
					                    });
					                },500)
					            }
					        });
					        layui.layer.full(index);
					        //改变窗口大小时，重置弹窗的宽高，防止超出可视区域
					        $(window).on("resize",function(){
					            layui.layer.full(index);
					        })
					    }
					    $(".add").click(function(){
					        addNews();
					    });					   
				 
	                   
	                    
					});