import express from "express";
const app = express();

app.get("/", (req,res) =>{
    res.send("test world");
});

app.get('/users/:user/skills/:skill', (req,res)=>{
    res.send(req.params);
});

app.get("/query", (req, res) =>{
    res.send(req.query);
});

const handler1 = (req, res, next) =>{
    console.log('handler1 (not send)');
    req.startTime = new Date();
    next();
}

const handler2 = (req, res, next) =>{
    console.log('handler2 (not send)');
    next();
}

app.get('/nextcheck', [handler1, handler2], (req, res, next) =>{
    console.log("handler sending. Please wait...");
    next();
},(req, res) =>{
    res.send(`${req.startTime}`);
});


export default app;