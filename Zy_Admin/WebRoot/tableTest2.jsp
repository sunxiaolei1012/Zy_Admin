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
 <script type="text/javascript" src="js/jquery.min.js"></script>
<script type="text/javascript" src="js/tableexport.js"></script>
<script type="text/javascript" src="js/jquery.base64.js"></script>
<%----%>
<style>
    html,body{
        width: 99%;
        height: 99%;
        font-family: "微软雅黑";
        font-size: 12px;
    }
    #tables{
        width: 100%;
        text-align: center;
        border: 1px #000 solid;
        border-collapse: collapse;
    }
    #tables th,#tables td{
        border: 1px solid #000000;
    }
    #tables th{
        font-size: 14px;
        font-weight: bolder;
    }
</style>
<table id="tables">
    <thead>
    <tr>
        <th>姓名</th>
        <th>性别</th>
        <th>年龄</th>
        <th>地址</th>
    </thead>
    <tbody>
    <tr>
        <td>张三</td>
        <td>男</td>
        <td>34</td>
        <td>湖北省武汉市</td>
    </tr>
    <tr>
        <td>张三</td>
        <td>男</td>
        <td>34</td>
        <td>湖北省武汉市</td>
    </tr>
 
    </tbody>
</table>
<input type="button" id="export" value="导出"/>
</body>
<script>
    $(document).ready(function(){
        $("#export").click(function(){
            //导出
            $("#tables").tableExport({type:"excel",escape:"false"});
        });
    });
</script>

</html>
