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
<meta http-equiv="content-type" content="text/html;charset=utf-8" />
  <script type="text/javascript" src="js/ExcelUtil.js"></script>
    <script>
        function exportExcel() {
            ExcelUtils.exportExcel("tableContent");
        }
    </script>
</head>
<body>
<h2>Hello World!</h2>
<button onclick="exportExcel();">增加</button>
<table border="1" id="tableContent">
    <tr>
        <th>序号</th>
        <th>姓名</th>
        <th>地址</th>
        <th>操作</th>
    </tr>
    <tr>
        <td>1</td>
        <td>李狗剩</td>
        <td>福州</td>
        <td>
            <button onclick='del(this);'>删除</button>
        </td>
    </tr>
    <tr>
        <td>2</td>
        <td>葛二蛋</td>
        <td>平潭</td>
        <td>
            <button onclick='del(this);'>删除</button>
        </td>
    </tr>
 </table>
</body>

</html>
