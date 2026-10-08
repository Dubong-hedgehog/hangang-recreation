// Firebase 연결 설정 - 1단계에서 복사한 값으로 교체하세요
const firebaseConfig = {
  apiKey: "AIzaSyA9n4AUvDTSzqw8IrhMTqTw0cg-TRNOPNk",
  authDomain: "hangang-recreation.firebaseapp.com",
  databaseURL: "https://hangang-recreation-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "hangang-recreation",
  storageBucket: "hangang-recreation.firebasestorage.app",
  messagingSenderId: "629668592655",
  appId: "1:629668592655:web:277cbe6f0af98124df777a"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();
