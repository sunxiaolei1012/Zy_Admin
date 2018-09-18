function GetInfoFromTable(tableid) {
  var tableInfo;
  var tableObj = document.getElementById(tableid);
  for (var i = 0; i < tableObj.rows.length; i++) {  //遍历Table的所有Row
    for (var j = 0; j < tableObj.rows[i].cells.length; j++) {  //遍历Row中的每一列
      tableInfo = tableObj.rows[i].cells[j].innerText;  //获取Table中单元格的内容
      if(tableInfo == "等待审核"){
        tableObj.rows[i].cells[j].click(function(){
          tableObj.rows[i].cells[j].innerText = "通过审核";
          tableObj.rows[i].cells[j].css("color","green");
        })
        
      }
      if(tableInfo == "通过审核"){
        tableObj.rows[i].cells[j].innerText = "等待审核";
        tableObj.rows[i].cells[j].css("color","red");           
      }  
    }
  }
}
// document.getElementById('tab').rows[0].childNodes[0].innerText = 'aaa';