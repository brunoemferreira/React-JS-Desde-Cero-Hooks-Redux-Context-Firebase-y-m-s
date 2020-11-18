import app from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA6SlMVQzoCsQZF4yYFnz05NQPTxz_Tfec",
  authDomain: "crud-udemy-react-943ed.firebaseapp.com",
  databaseURL: "https://crud-udemy-react-943ed.firebaseio.com",
  projectId: "crud-udemy-react-943ed",
  storageBucket: "crud-udemy-react-943ed.appspot.com",
  messagingSenderId: "288203229607",
  appId: "1:288203229607:web:4b26f3646cbf758a7b0e82",
};
// Initialize Firebase
app.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = app.auth();

export { db, auth };
