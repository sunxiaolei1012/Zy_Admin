layui.use(['element', 'layer'], function () {
					  var element = layui.element;
					  var layer = layui.layer;
					  var laypage = layui.laypage;
					  var $ = layui.jquery;
					  

					    
						// 全选
						$("#selected-all").click(function(){
						    if($("#selected-all").is(":checked")){
						       $('input[name="id"]').each(function(){
							   $(this).attr("checked","checked");
													});
						    }else{
						    	$('input[name="id"]').each(function(){
							    $(this).attr("checked",false);
													});
						    }							 
							
						});
						
	                    // 批量删除按钮
					    $(".delAll_btn").click(function () {
							     
						    var chk_value = [];
						    $('input[name="id"]:checked').each(function () {
						      chk_value.push($(this).val());
						    });
						    if (chk_value.length == 0) {
						      layer.msg("请选择要删除的数据!", { anim: 1 });
						      return false;
						    }
						    layer.confirm('确定要删除选中的数据吗?', { icon: 3, title: '提示' }, function (index) {
						      //删除接口
						      // $.ajax(url, { id: chk_value }, function (obj) {
						      //   if (obj.code == 1) {
						      //     layer.msg(obj.msg, { anim: 1 });
						      //     $(".dw-refresh").trigger('click');
						      //   } else {
						      //     layer.msg(obj.msg, { anim: 1 });
						      //   }
						      // });
						      // 简单从页面上删除，刷新后会加载出来
						       
				                  $(".site-table").find('.table-row input:checked').parent().parent().remove(); 
								//隐藏所有被选中的input元素
								 //parent() 获得当前匹配元素集合中每个元素的父元素,
					            
						          layer.close(index);
						    });
						  });
					    // 删除
				        $(".del").click(function () {
				        	 if($('input[name="id"]').is(":checked")){
								    layer.confirm('确定要删除吗?', { icon: 3, title: '提示' }, function (index) {
								      // $.ajax(url, {}, function (obj) {
								      //   if (obj.code == 1) {
								      //     layer.msg(obj.msg, { anim: 1 });
								      //     $(".dw-refresh").trigger('click');
								      //   } else {
								      //     layer.msg(obj.msg, { anim: 1 });
								      //   }
								      // });
								      
							        $(".site-table").find('.table-row input:checked').parent().parent().remove(); 									
								    layer.close(index);
					            });
							}
					   });
				    // 刷新
				    	$(".dw-refresh").click(function () {
					    location.href = location.href;
					    });
					});