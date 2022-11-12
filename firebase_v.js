import { initializeApp } from "firebase/app";
import { getDatabase,ref,set,remove,onValue} from "firebase/database";
import promptSync from 'prompt-sync';

const prompt = promptSync();

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

const app = initializeApp(firebaseConfig);
const db = getDatabase();

function write(id,first,last,section)
{
  var refwrite = ref(db,'student/'+id)
  set(refwrite, 
    {
    id: id,
    first: first,
    last: last,
    section: section
    });
}

function read()
{
  var refread = ref(db,'student/');
  onValue(refread, (snapshot) => 
    {
    const data = snapshot.val();
    console.log(data); 
    })
}

function update(old_id,new_id,first,last,section)
{
  var refwrite = ref(db,'student/'+old_id)
  set(refwrite, 
    {
    id: new_id,
    first: first,
    last: last,
    section: section
    });
}

function removed(id)
{
  remove(ref(db,'student/'+id));
}

function main()
{
  console.log("\n1. Create\n2. Read\n3. Update\n4. Delete")
  const choice = prompt("Choice: ")
  
  if(choice == 1)
  {
    const id = prompt("\nStudent ID: ")
    const first = prompt("First Name: ")
    const last = prompt("Last Name: ")
    const section = prompt("Section: ")  
    write(id,first,last,section)    
  }

  if(choice == 2)
  {
    read()        
  }

  if(choice == 3)
  {
    const old_id = prompt("\nOld Student ID: ")
    const new_id = prompt("\nNew Student ID: ")
    const first = prompt("New First Name: ")
    const last = prompt("New Last Name: ")
    const section = prompt("New Section: ")  
    update(old_id,new_id,first,last,section)        
  }

  if(choice == 4)
  {
    const id = prompt("\nStudent ID: ")
    removed(id)
     
  }
}

main()



