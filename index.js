var express = require("express");
var app = express ();
var fs =require("fs");
app.use(express.static("root"));

let data = fs.readFileSync("./posts.json");
let json = JSON.parse(data)
console.log(json);

app.use(express.json());



//GET method api
app.get("/post",(req,res)=>{
	// json.push({"title":"chhaya","desc":"prajapati"})
res.send(json);
// res.send(req.params)
// res.send(req.query);
})


//post method api

app.post("/post",(req,res)=>{
	res.send(req.body);
// 	json.push({"title":"chhaya","desc":"timbadiya"});
// fs.writeFileSync("./posts.json",JSON.stringify(json,null,2));
	})


app.listen(3000,()=>{console.log("listening on port 3000")});



