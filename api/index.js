import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "tonidev123",
  database: "test",
});


app.use(express.json());
app.use(cors())


app.get("/", (req, res) => {
  res.json("opa! esse é o backend!");
});

app.get("/livros", (req, res) => {
  const q = "SELECT * FROM livros";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post("/livros", (req, res) => {
  const q = "INSERT INTO livros (`titulo`,`descricao`,`cover`) VALUES(?)";
  const values = [
 req.body.titulo,
 req.body.descricao,
 req.body.cover,
  ];

  db.query(q, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("Livro foi adicionado com sucesso!");
  });
});

app.listen(8800, () => {
  console.log("Conectado ao Backend!");
});
