function cc(aa)
	                     { 
	                     	layer.open({
						      type: 2,
						      title: "编辑",						       
						      area: ['600px', '400px'],
						      content: "admin_userform.html",
						      cancel: function (index, layero) {
						        $(".dw-refresh").trigger('click');
						        return true;
						      }
						    });
	                     }