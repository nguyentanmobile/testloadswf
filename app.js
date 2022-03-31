const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();

app.use(express.static(path.join(__dirname,"/src/public/")));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}));

app.get('/content', function(req, res){
    console.log(req.query)
    if(req.query.contentname && req.query.contentname!==""){
       
        try{
            const file = `${__dirname}/src/public/contents/${req.query.contentname}`;           
            res.download(file); // Set disposition and send it.
        }catch(e){     
            res.send({error:"File is not exist"})
        }finally{
            
        }
    }    
  });

app.listen(process.env.PORT || 3000,(err)=>{
    if(!err){
        console.log("server is running")
    }
})
