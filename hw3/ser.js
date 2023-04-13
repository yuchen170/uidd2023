// 引入必要的模組
import express from 'express';
import bodyParser from 'body-parser';
import fs from 'fs';
import { dirname } from 'path'
import { fileURLToPath } from 'url'
import path from 'path';
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
console.log(__dirname)
console.log(__filename)

// 建立 Express 應用程式
const app = express();
const port = 9999;

const staticFilePath = path.join(__dirname, 'dist');
app.use(express.static(staticFilePath));

// 設定 bodyParser，用於解析 POST 請求的內容
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Endpoint for /list route
app.post('/list', (req, res) => {
  fs.readFile(path.join(__dirname, 'students.json'), 'utf8', (err, data) => {
    if (err) {
      // 若讀取檔案時發生錯誤，回傳錯誤訊息
      console.error(err);
      return res.status(500).send('Internal Server Error');
    }

    try {
      // 將讀取到的內容解析為 JSON 格式
      const students = JSON.parse(data);

      // 重新格式化成特定的格式
      let formattedStudents = '';
      for (const key in students) {
        formattedStudents += `${key}: ${students[key]}<br>`;
      }

      // 將重新格式化後的內容作為回應的內容送出
      res.send(formattedStudents);
    } catch (err) {
      // 若解析 JSON 時發生錯誤，回傳錯誤訊息
      console.error(err);
      return res.status(500).send('Internal Server Error');
    }
  });
});

// Endpoint for /search route
app.post('/search', (req, res) => {
  const ID = req.body.id_search;
  if(!ID || ID.trim() ===''){
    res.send(`ID cannot be empty`)
    return res.status(400);
  }


  // 使用 fs 模組讀取 students.json 檔案
  fs.readFile(path.join(__dirname, 'students.json'), 'utf8', (err, data) => {
    if (err) {
      // 若讀取檔案時發生錯誤，回傳錯誤訊息
      console.error(err);
      return res.status(500).send('Internal Server Error');
    }

    try {
      // 將讀取到的內容解析為 JSON 格式
      const students = JSON.parse(data);

      // 搜尋學生 ID 是否存在於 students 物件中
      if(ID.trim()==='R00000'){
        res.send('Never gonna let you down')
      }
      else if (ID in students) {
        // 若存在，回傳該學生的名字
        
        res.send(`Hello ${students[ID]}`);
      } 
      else {
        // 若不存在，回傳找不到學生的訊息
        res.send('Student not found');
      }
      
    } catch (err) {
      // 若解析 JSON 時發生錯誤，回傳錯誤訊息
      console.error(err);
      return res.status(500).send('Internal Server Error');
    }
  });
});

// Endpoint for /add route
app.post('/add', (req, res) => {
  const ID = req.body.id_add;
  const NAME = req.body.name_add;
  if(!ID || ID.trim() ===''){
    res.send(`ID cannot be empty`)
    return res.status(400);
  }
  if (!NAME || NAME.trim() === '') {
    res.send(`Name cannot be empty`)
    return res.status(400);
  }
  

  // 使用 fs 模組讀取 students.json 檔案
  fs.readFile(path.join(__dirname, 'students.json'), 'utf8', (err, data) => {
    if (err) {
      // 若讀取檔案時發生錯誤，回傳錯誤訊息
      console.error(err);
      return res.status(500).send('Internal Server Error');
    }

    try {
      // 將讀取到的內容解析為 JSON 格式
      const students = JSON.parse(data);
      if (typeof students !== 'object' || students === null) {
        throw new Error('Invalid JSON format');
      }
      // 檢查學生 ID 是否已存在於 students 物件中
      if(ID.trim()==='R00000'){
        res.send('Never gonna let you down')
      }
      else if (ID in students) {
        // 比較名字是否相符，若不符合則更新名字並回傳相應訊息
        if (students[ID] !== NAME) {
          students[ID] = NAME;
          // 使用 fs 模組寫入更新後的內容到 students.json 檔案
          fs.writeFile(path.join(__dirname, 'students.json'), JSON.stringify(students), 'utf8', (err) => {
            if (err) {
              // 若寫入檔案時發生錯誤，回傳錯誤訊息
              console.error(err);
              return res.status(500).send('Internal Server Error');
            }
            res.send(`Student "${ID}" has been registered with updated name "${NAME}"`);
          });
        } else {
          // 若名字相符，回傳訊息
          res.send(`Student "${ID}" already exists with the same name`);
        }
      } else {
        // 若不存在，將學生資料新增到 students 物件中並回傳訊息
        students[ID] = NAME;
        // 使用 fs 模組寫入更新後的內容到 students.json 檔案
        fs.writeFile(path.join(__dirname, 'students.json'), JSON.stringify(students), 'utf8', (err) => {
          if (err) {
            // 若寫入檔案時發生錯誤，回傳錯誤訊息
            console.error(err);
            return res.status(500).send('Internal Server Error');
          }
          res.send(`Student "${ID}" has been registered with name "${NAME}"`);
        });
      }
    } catch (err) {
      // 若解析 JSON 時發生錯誤，回傳錯誤訊息
      console.error(err);
      return res.status(500).send('Internal Server Error');
    }
  });
});



// Endpoint for /delete route
app.delete('/delete', (req, res) => {
  const ID = req.body.id_delete;
  if(!ID || ID.trim() ===''){
    res.send(`ID cannot be empty`)
    return res.status(400);
  }

  // 使用 fs 模組讀取 students.json 檔案
  fs.readFile(path.join(__dirname, 'students.json'), 'utf8', (err, data) => {
    if (err) {
      // 若讀取檔案時發生錯誤，回傳錯誤訊息
      console.error(err);
      return res.status(500).send('Internal Server Error');
    }

    try {
      // 將讀取到的內容解析為 JSON 格式
      const students = JSON.parse(data);
      if (typeof students !== 'object' || students === null) {
        throw new Error('Invalid JSON format');
      }
      // 檢查學生 ID 是否存在於 students 物件中
      if(ID.trim()==='R00000'){
        res.send('Never gonna let you down')
      }
      else if (ID in students) {
        // 刪除指定 ID 的學生資料並回傳訊息
        delete students[ID];
        // 使用 fs 模組寫入更新後的內容到 students.json 檔案
        fs.writeFile(path.join(__dirname, 'students.json'), JSON.stringify(students), 'utf8', (err) => {
          if (err) {
            // 若寫入檔案時發生錯誤，回傳錯誤訊息
            console.error(err);
            return res.status(500).send('Internal Server Error');
          }
          res.send(`Student "${ID}" has been deleted`);
        });
      } else {
        // 若學生 ID 不存在，回傳相應訊息
        res.send(`Student "${ID}" not found`);
      }
    } catch (err) {
      // 若解析 JSON 時發生錯誤，回傳錯誤訊息
      console.error(err);
      return res.status(500).send('Internal Server Error');
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});