
const express=require('express')
const bodyParser=require('body-parser');
const date=require(__dirname+"/date.js")
const { urlencoded } = require('body-parser');
var list1=[]
var workList=[]
var name1=""
const app=express()
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}))

app.use(express.static("public"))
app.get("/",function(request,response){
let day=date.getDate();
response.render("list",{
    
    listTitle:day,newlistitem:list1
})
})
app.post("/",function(request,response){
    let name1=request.body.newItem;
    if(request.body.list==="Work"){
        workList.push(name1)
        response.redirect("/work")
    }
    else {
        list1.push(name1)
    response.redirect("/")

    }
    
    
})
app.get("/work",function(request,response){
    response.render("list",{listTitle:"Work List",newlistitem:workList})
})
app.post("/work",function(request,response){
    let item=request.body.newItem 
    workList.push(item)
    response.redirect("/work")
})
app.listen(3000,function(){
    console.log("server has started")
})