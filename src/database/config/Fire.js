import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAiYp6vRgIDo_ENhSY1D75W7sVKlpL5pw0",
    authDomain: "doky-ab3be.firebaseapp.com",
    databaseURL: "https://doky-ab3be.firebaseio.com",
    projectId: "doky-ab3be",
    storageBucket: "doky-ab3be.appspot.com",
    messagingSenderId: "622867908082",
    appId: "1:622867908082:web:5ca2396d342886fc22d76b",
    measurementId: "G-FE7E2EWJTN"
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export default fire;