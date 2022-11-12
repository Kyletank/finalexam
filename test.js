const { initializeApp} = require('firebase/app');
const { getDatabase,ref,set,remove,onValue } = require('firebase/database');
const express = require("express");
const app = express();
const bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
const port = 3000;

const firebaseConfig = 
{
  apiKey: "AIzaSyB9FIHP1ATTvDQTT3rKgjl7nYvNmKlq4EY",
  authDomain: "asi-project-e16ae.firebaseapp.com",
  databaseURL: "https://asi-project-e16ae-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "asi-project-e16ae",
  storageBucket: "asi-project-e16ae.appspot.com",
  messagingSenderId: "12044023770",
  appId: "1:12044023770:web:b3c8ebc0ae443716ab72e3",
  measurementId: "G-63GQ333PT4"
};

const appdb = initializeApp(firebaseConfig);
const db = getDatabase();

function write(id,dept,course,title,author,date)
{
  var refwrite = ref(db,'book/'+id)
  set(refwrite, 
    {
    id: id,
    dept: dept,
    course: course,
    title: title,
    author: author,
    date: date,
    });
}

/*
function read(id)
{
  var refread = ref(db,'book/'+id);
  onValue(refread, (snapshot) => 
    {
    const data = snapshot.val();
    return String(data)
    })
}
*/

function removed(id)
{
  remove(ref(db,'book/'+id));
}

function update(old_id,new_id,dept,course,title,author,date)
{
  removed(old_id)
  var refwrite = ref(db,'book/'+new_id)
  set(refwrite, 
    {
      id: new_id,
      dept: dept,
      course: course,
      title: title,
      author: author,
      date: date,
    });
}

app.get('/main',function(req,res) {
  res.sendFile(__dirname +'/main.html')
});

app.get('/create',function(req,res) {
  res.sendFile(__dirname +'/create.html')
});

app.post('/create',urlencodedParser,function(req,res) {
  const id = req.body.id;
  const dept = req.body.dept;
  const course = req.body.course;
  const title = req.body.title;
  const author = req.body.author;
  const date = req.body.date;
  write(id,dept,course,title,author,date)
})

/*
app.get('/read',function(req,res) {
  res.sendFile(__dirname +'/read.html')
});

app.post('/read',urlencodedParser,function(req,res) {
  const id = req.body.id;
  data = read(id)
  res.send(data)
})
*/

app.get('/update',function(req,res) {
  res.sendFile(__dirname +'/update.html')
});

app.post('/update',urlencodedParser,function(req,res) {
  const old_id = req.body.old_id;
  const new_id = req.body.new_id;
  const dept = req.body.dept;
  const course = req.body.course;
  const title = req.body.title;
  const author = req.body.author;
  const date = req.body.date;
  update(old_id,new_id,dept,course,title,author,date)
})

app.get('/delete',function(req,res) {
  res.sendFile(__dirname +'/delete.html')
});

app.post('/delete',urlencodedParser,function(req,res) {
  const id = req.body.id;
  removed(id)
})

app.listen(port, () => {
  console.log(`Server is running on port 3000.`);
});