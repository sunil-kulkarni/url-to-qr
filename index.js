
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import qr from "qr-image";
import fs from "fs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3001;

app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));

app.post("/generate", (req, res) => {
  const text = req.body.text || "";
  const qr_svg = qr.image(text, { type: "png" });
  const filePath = __dirname + "/public/qr_image.png";

  const out = fs.createWriteStream(filePath);
  qr_svg.pipe(out);

  out.on("finish", () => {
    res.sendStatus(200);
  });

  out.on("error", (err) => {
    console.error(err);
    res.status(500).send("QR generation failed");
  });
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/main.html");
});


app.listen(port, () => {
  console.log("Server listening at http://localhost:" + port);
});
