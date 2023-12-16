// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
	apiKey: "AIzaSyBJ_AVhVmckoX25GWtMwqQPIx5G37EXoyQ",
	authDomain: "todo-list-87115.firebaseapp.com",
	projectId: "todo-list-87115",
	storageBucket: "todo-list-87115.appspot.com",
	messagingSenderId: "522060004493",
	appId: "1:522060004493:web:ecb7246ebbfb895efd76c4",
	databaseURL:
		"https://todo-list-87115-default-rtdb.europe-west1.firebasedatabase.app/",
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
