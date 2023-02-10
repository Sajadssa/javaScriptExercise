const express=require("express");

const path=require("path");

const app=express();
app.use('/Clients',express.static(path.resolve(__dirname,'Clients')));

app.get("/*", (req, res) => {

    res.sendFile(path.resolve(__dirname,'Clients','index.html'));

});

app.listen(process.env.PORT||5000, () => console.log('server is running...'));