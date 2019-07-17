var mysql  = require('mysql');
var express=require("express");
var app = express();
var connection = mysql.createConnection
 (
    {
        host:'localhost',
        user:'root',
        password:'root',
        database:'user'
    }
);
app.listen(7070,function()
{
    console.log("we starting express at 7070");
});
app.get("/",function(request,respond)
{
    respond.sendFile(__dirname+"/1.html");
});
app.get("/1",function(req,res)
{
connection.query("insert into packagen select course_name,sub_name from video union all select course_name,sub_name from test", function (err, result, fields)
{
    if (err) throw err;
    else
    {
        console.log(result);
    }
})
});

//insert into packagen select course_name,sub_name from video union all select course_name,sub_name from test;