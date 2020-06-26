import * as firebase from 'firebase';
import "firebase/database";


const firebaseConfig = {
    apiKey: "AIzaSyBexO8TwcefEwOwUHnf70gNT8OmQV_3sWk",
    authDomain: "vocero-8fb92.firebaseapp.com",
    databaseURL: "https://vocero-8fb92.firebaseio.com",
    projectId: "vocero-8fb92",
    storageBucket: "vocero-8fb92.appspot.com",
    messagingSenderId: "934076928663",
    appId: "1:934076928663:web:02f59566e2be2676040fd2",
    measurementId: "G-KHBYQZZ8H5",
};
firebase.initializeApp(firebaseConfig);

export const db = firebase.database();