import { getDatabase, ref, set, get, push, child, update, onValue } from "firebase/database";
const db = getDatabase();

function writeData(userId, studentId, name, lastname, section) {
	set(ref(db, 'users/' + userId), {
	Id: studentId,
	firstname: name,
	lastname: lastname,
	section : section
	})
	.then(() => {
		console.log("Data saved successfully!");
	})
	.catch((error) => {
		console.log("The write failed...");
	});
}

function readData() {
	get(child(dbRef, 'users/${userId}')).then((snapshot) => {
		if (snapshot.exists()) {
			console.log(snapshot.val());
		} else {
			console.log("No data available");
		}
	})
	.catch((error) => {
		console.error(error);
	})
}

function updateData(studentId, name, lastname, section) {
  const db = getDatabase();

  const postData = {
	  studentId: studentId,
	  name: name,
	  lastname: lastname,
	  section: section
  };

  const newPostKey = push(child(ref(db), 'users')).key;

  const updates = {};
  updates['/users/' + newPostKey] = postData;

  return update(ref(db), updates);
}

function deleteData(studentId, name, lastname, section) {
  const db = getDatabase();

  const postData = {
	  studentId: studentId,
	  name: name,
	  lastname: lastname,
	  section: section
  };

  const newPostKey = push(child(ref(db), 'users')).key;

  const updates = {};
  updates['/users/' + newPostKey] = postData;

  return remove(ref(db), updates);
}