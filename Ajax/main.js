const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const port = 3000;

// 設定 bodyParser，用於解析 POST 請求的內容
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// 列出所有學生
app.get('/students', (req, res) => {
  fs.readFile('students.json', 'utf8', (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send('Internal server error');
      return;
    }
    const students = JSON.parse(data);
    res.json(students);
  });
});

// 查詢特定學生
app.get('/students/:id', (req, res) => {
  const id = req.params.id;
  fs.readFile('students.json', 'utf8', (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send('Internal server error');
      return;
    }
    const students = JSON.parse(data);
    const student = students.find((s) => s.id === id);
    if (student) {
      res.json(student);
    } else {
      res.status(404).send('Student not found');
    }
  });
});

// 新增學生
app.post('/students', (req, res) => {
  const id = req.body.id;
  const name = req.body.name;
  fs.readFile('students.json', 'utf8', (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send('Internal server error');
      return;
    }
    const students = JSON.parse(data);
    const student = students.find((s) => s.id === id);
    if (student) {
      res.status(400).send('Student already exists');
    } else {
      students.push({ id: id, name: name });
      const newData = JSON.stringify(students, null, 2);
      fs.writeFile('students.json', newData, (err) => {
        if (err) {
          console.log(err);
          res.status(500).send('Internal server error');
          return;
        }
        res.send('Student added successfully');
      });
    }
  });
});

// 刪除學生
app.delete('/students/:id', (req, res) => {
  const id = req.params.id;
  fs.readFile('students.json', 'utf8', (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send('Internal server error');
      return;
    }
    const students = JSON.parse(data);
    // 找出要刪除的學生在陣列中的索引
const index = students.findIndex((s) => s.id === id);
if (index === -1) {
res.status(404).send('Student not found');
} else {
students.splice(index, 1);
const newData = JSON.stringify(students, null, 2);
fs.writeFile('students.json', newData, (err) => {
if (err) {
console.log(err);
res.status(500).send('Internal server error');
return;
}
res.send('Student deleted successfully');
});
}
});
});

// 啟動伺服器
app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);

});
