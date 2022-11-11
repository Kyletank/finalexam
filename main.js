import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import './main_api.js';

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
	// ...
	// The value of `databaseURL` depends on the location of the database
	databaseURL: "https://activity-6asi-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

// var mlist = new List([1,0000001, 'Mark','Doe','CS401']);

api.writeData(1,0000001, 'Mark','Doe','CS401');