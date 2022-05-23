//express_demo.js 文件
var express = require('express');
var app = express();
var mysql      = require('mysql');
const bodyParser = require("body-parser")
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '123456',
  database : 'test',
  port:'3306'
});
 
connection.connect();
connection.query("SELECT * FROM user_info", function (error, results, fields) {
               if (error) throw error;
               console.log('The userphone is: ', results[0].user_phone);
             });
// var cors = require('cors');
// app.use(cors())
//解决跨域问题
app.all('*', function(req, res, next) {
               res.header('Access-Control-Allow-Origin', '*')
               res.header('Access-Control-Allow-Headers', '*')
               res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
               res.header('X-Powered-By', ' 3.2.1')
               res.header('Content-Type', 'application/json;charset=utf-8')
               next()})
app.use('/public', express.static('public'));

// 解析application/json
app.use(bodyParser.json())
// 解析url编码
app.use(bodyParser.urlencoded({extended:false}))
//  主页输出 "Hello World"
app.get('/', function (req, res) {
               console.log("主页 GET 请求");
               res.send('Hello GET');
            })
             
//  POST 请求
app.post('/', function (req, res) {
               console.log("主页 POST 请求");
               res.json({code:-1,message:'Hello POST'});
            })
app.post('/login', function (req, res) {
               console.log(req.body)
               console.log(req.query)
               console.log(req.params)
               let result = {}
               let code = 0
               connection.query(`SELECT user_id FROM user_info where user_name= "${req.body.username}" and user_password="${req.body.password}"`,function (error, results) {
                              // if (error) throw error;
                              if(results.length===0){
                                             code = -1
                                             result = {code:-1,message:'密码错误',data:[]}
                                             res.json({code:-1,message:'密码错误',data:[]});        
                              }else{
                                             res.json({code:1,message:'登录成功',data:results[0]});
                                             code = 1
                                             result = {code:1,message:'登录成功',data:results[0]}
                                             console.log('ss')
                              }
                            });
})

app.post('/register', function (req, res) {
               console.log(req.body)
               console.log(req.query)
               console.log(req.params)
               let result = {}
               let code = 0
               connection.query(`SELECT user_id FROM user_info where user_name= "${req.body.username}"`,function (error, results) {
                              // if (error) throw error;
                              if(results.length===1){
                                             code = -1
                                             res.json({code:-1,message:'用户名存在',data:[]});   
                              }else{
                                      connection.query(`INSERT INTO user_info VALUES (UUID(),"${req.body.password}","${req.body.userphone}","${req.body.username}")
                                      `,function (error, results) {
                                                            // if (error) throw error;
                                                            console.log(`INSERT INTO user_info VALUES(UUID(),“${req.body.password}”,“${req.body.userphone}”,“${req.body.username}”)
                                                            `)
                                                            res.json({code:-1,message:'注册成功',data:{}}); 

                                                          });   
                              }
                            });
})
 


app.post('/getOcupational', function (req, res) {
               console.log(req.body)
               console.log(req.query)
               console.log(req.params)
               let result = {}
               let code = 0
               connection.query(`SELECT occupation_name,occupation_introduction,id FROM occupation`,function (error, results) {
                              // if (error) throw error;
                              res.json(results)
                              console.log(results)
                            });
})

app.post('/getOcupationalById', function (req, res) {
               console.log(req.body)
               console.log(req.query)
               console.log(req.params)
               let result = {}
               let code = 0
               connection.query(`SELECT a.occupation_name,a.occupation_introduction,b.course_name,b.id FROM occupation as a LEFT JOIN course as b on a.id = b.occupation_id where a.id='${req.body.id}'`,function (error, results) {
                              // if (error) throw error;
                              res.json(results)
                              console.log(results)
                            });
})

app.post('/getForumById', function (req, res) {
               console.log(req.body)
               console.log(req.query)
               console.log(req.params)
               let result = {}
               let code = 0
               connection.query(`SELECT a.course_name,a.course_introduction,b.forum_name,b.id FROM course as a LEFT JOIN forum as b on a.id = b.course_id where a.id='${req.body.id}'`,function (error, results) {
                              // if (error) throw error;
                              res.json(results)
                              console.log(results)
                            });
})

app.post('/getForum', function (req, res) {
               console.log(req.body)
               console.log(req.query)
               console.log(req.params)
               let result = {}
               let code = 0
               connection.query(`SELECT forum_name,id FROM forum`,function (error, results) {
                              // if (error) throw error;
                              res.json(results)
                              console.log(results)
                            });
})
app.post('/getCourse', function (req, res) {
               console.log(req.body)
               console.log(req.query)
               console.log(req.params)
               let result = {}
               let code = 0
               connection.query(`SELECT course_name,id FROM course`,function (error, results) {
                              // if (error) throw error;
                              res.json(results)
                              console.log(results)
                            });
})


app.post('/getDiscussion', function (req, res) {
               console.log(req.body)
               console.log(req.query)
               console.log(req.params)
               let result = {}
               let code = 0
               connection.query(`SELECT discusstion.id,user_name,discusstion_time,discusstion_content FROM discusstion LEFT JOIN forum on forum.id = discusstion.forum_id  LEFT JOIN user_info on discusstion.user_id = user_info.user_id where forum.id='${req.body.id}' ORDER BY discusstion_time desc`,function (error, results) {
                              // if (error) throw error;
                              res.json(results)
                              console.log(results)
                            });
})
app.post('/getCourseAndTeacher', function (req, res) {
               console.log(req.body)
               console.log(req.query)
               console.log(req.params)
               let result = {}
               let code = 0
               connection.query(`SELECT course_name,course_teacher,forum_name FROM forum LEFT JOIN course on forum.course_id = course.id where forum.id='${req.body.id}'`,function (error, results) {
                              // if (error) throw error;
                              res.json(results)
                              console.log(results)
                            });
})


app.post('/insertDisscussion', function (req, res) {
               console.log(req.body)
               console.log(req.query)
               console.log(req.params)
               let result = {}
               let code = 0
               connection.query(`INSERT INTO discusstion VALUES(UUID(),'${req.body.forum_id}','${req.body.user_id}','${req.body.content}','${req.body.discusstion_time}')`,function (error, results) {
                              // if (error) throw error;
                              res.json(results)
                              console.log(results)
                            });
                            console.log(`INSERT INTO discusstion VALUES(UUID(),'${req.body.forum_id}','${req.body.user_id}','${req.body.content}','${req.body.discusstion_time}')`)
})







var server = app.listen(8111, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
 
})