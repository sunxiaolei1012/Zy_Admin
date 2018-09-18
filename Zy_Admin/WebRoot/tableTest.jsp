
<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
			String path = request.getContextPath();
			String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
			%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<base href="<%=basePath%>">

<meta charset="utf-8">
<title>后台管理模板</title>
<meta name="renderer" content="webkit">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta name="viewport"
	content="width=device-width, initial-scale=1, maximum-scale=1">
<meta name="apple-mobile-web-app-status-bar-style" content="black">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="format-detection" content="telephone=no">


	
</head>
  <script type="text/javascript" src="js/jquery.min.js"></script>
<script type="text/javascript" src="js/tableexport.js"></script>

    <script type="text/javascript">
        function exportExcelWithJS(){
        alert("aaa");
            //获取要导出Excel的表格对象并设置tableExport方法，设置导出类型type为excel
            $('#excels').tableExport({
                type:'excel',
                fileName:'2',//文件名
                worksheetName:'2',//sheet表的名字
                
                excelstyles:['text-align']//使用样式，不用填值只写属性，值读取的是html中的
            });
        }
    </script>
 <body>
    <input  type="button" onclick="exportExcelWithJS();" value="导出EXCEL">
    <div id="excels">
        <table>
        <tr>
            <th>姓名</th>
            <th>年龄</th>
            </tr>
            <tr>
            <td>小明</td>
            <td>121</td>
            </tr>
        </table>
    </div>
 </body>
</body>
</html>
