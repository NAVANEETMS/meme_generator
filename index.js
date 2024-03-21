import express from "express";
import axios from "axios";
const app=express();
const port=3000;

app.get("/", (req,res) =>{
    res.render("index.ejs");
});
app.use(express.static("public"))
app.post("/submit", async(req,res) =>{
  try{
    const result=await axios.get("https://meme-api.com/gimme")
    res.render("index.ejs", { content: result.data.url, titlee:result.data.title,});
  } catch(error){
    console.log("Failed to make request:",error.message);
  }
});
app.listen(port,() =>{
    console.log(`listening on port ${port}`);
});   