var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //DBに接続
  var Connection = require('tedious'),Connection:
  var config = {
    username: 'mitsuru1397',
    password: 'App2016web2',
    server:  '2016web2-mitsuru1397.database.windows.net',
    options: {encrypt:true, database: '2016web2-13'}
  };
  var connection = new Connection(config);
  connection.on('connect', function(err) {
    if(err){
      res.render('index', {title:"はじめての DB", message:err});
    }else{
      console.log("Connented");
      execureStatement();
    }
  });
  
  var Request = require('tedious').Request;
  var TYPES = require('tedious').TYPES;
  
  function exexuteStatement() {
    request = new Request("SELECT TOP(10) CompanyName FROM SalesLT.Customer;", function(err) {
    if (err) {
      console. log(err);}
    });
    
    var result = '<table>';
    
    request.on('row' function(columns) {//データの取得毎に呼ばれる
      result += '<tr>';
      columns.forEach(function(column) {
        if (column. value === null) {
          console.log('NULL');
        }else {
          result+='<td>' + column.value + '</td>';
        }
        result += '</td>';
      });
    });
    
    request.on('doneProc', function(rowCount, more, returnStatus, rows)
         result += "</table>";
         res.render('index', {title:"はじめての DB", message:result});
  });
  
  conection.exeSql(request);
}
});

module.exports = router;
