<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>智慧校园</title>
    <meta charset="utf-8">
        <title>用户信息</title>
        <meta name="renderer" content="webkit">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
        <meta name="apple-mobile-web-app-status-bar-style" content="black">
        <meta name="apple-mobile-web-app-capable" content="yes">
        <meta name="format-detection" content="telephone=no">

        <link rel="stylesheet" href="plugins/layui/css/layui.css" media="all" />
        <link rel="stylesheet" type="text/css" href="http://www.jq22.com/jquery/font-awesome.4.6.0.css">
    </head>
 <script type="text/javascript" src="js/ExcelUtil.js"></script>
    <script>
        function exportExcel() {
            ExcelUtils.exportExcel("tableContent");
        }
    </script>
    <body>
     				<button onclick="exportExcel()">导出表格</button>
         <fieldset class="layui-elem-field">
				<legend>商品列表</legend>
				<div class="layui-field-box">
					
		
         	<center>   
            <table id="tableContent"    border="5px" style="border-width: 1px;
         padding:8px;
         border-style:solid;
         
         background-color:#C7EDCC;" >
            <tr >
            	<th width="200px" >名称</th>
            	<th width="150px">现金</th>
            </tr>
            <tr>
            	<td>总营业额</td>
            	<td></td>
            </tr>
            <tr>
            	<td>IC卡消费</td>
            	<td></td>
            </tr>
            <tr>
            	<td>现金消费</td>
            	<td></td>
            </tr>
            <tr>
            	<td>IC卡充值</td>
            	<td></td>
            </tr>
            <tr>
            	<td>收进抵用卡</td>
            	<td></td>
            </tr>
            <tr>
            	<td>实际收入合计</td>
            	<td></td>
            </tr>
            <tr>
            	<td>总计：</td>
            	<td></td>
            </tr>
				</table>   
				结账时间：<span></span> 结账人：<span></span>       
</center>

				  </div>
			</fieldset>
      
        <script type="text/javascript" src="plugins/layui/layui.js"></script>
         <script src="js/aa.js"></script>
        
        <script type="text/javascript" src="plugins/layui/layui.js"></script>
        <script type="text/javascript" src="js/jquery.min.js"></script>
        <script type="text/javascript"  >
        
        
			 function addSort(){
			
			 
			  
			  $.ajax({
            //几个参数需要注意一下
                type: "POST",//方法类型
                dataType: "json",//预期服务器返回的数据类型
                url: "Product_addSort" ,//url
                data: $('#myForm').serialize(),
                success: function (a) {
               
                    console.log(a);//打印服务端返回的数据(调试用)
                    if (a==1) {
                        alert("添加成功！");
                        window.parent.location.reload();
			parent.layer.closeAll('iframe');

                    }
                    else{
                    	alert("添加失败！");
                    	window.parent.location.reload();
			parent.layer.closeAll('iframe');

                    }
                    ;
                },
                error : function() {
                    alert("异常！");
                },
                  
             
                
            });
            
			    
			  
               /*  $("#myForm").ajaxSubmit(function () {
                    alert("提交成功2");
                });
                return false; */
			 
				/* alert("ssssssss");
       			 $('#myForm').ajaxSubmit({
                url:'Edit_UserInfos',
                type:'post',
                dataType:'json',
                data:$("#myForm").serialize(),
                success:function(a){
                alert(a);
                    //回调函数 
                }
            }); */


        };
        
        
        </script>
    </body>

</html>