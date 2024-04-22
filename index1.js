import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
app.use(bodyParser.urlencoded({extended:true}))
const port = 3000;

app.get("/", (req, res) => {
  console.log(__dirname + "/public/index.html")
  res.sendFile(__dirname + "/public/index.html");
});
app.post("/submit",(req,res)=>{
  const street_name = req.body.street
  const pet_name = req.body.pet
  console.log(street_name + pet_name)
})
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
