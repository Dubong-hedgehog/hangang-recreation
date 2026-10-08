// Firebase 연결 설정 - 1단계에서 복사한 값으로 교체하세요
const firebaseConfig = {
  apiKey: "여기에_API_KEY_붙여넣기",
  authDomain: "여기에_PROJECT_ID.firebaseapp.com",
  databaseURL: "여기에_DATABASE_URL_붙여넣기",
  projectId: "여기에_PROJECT_ID_붙여넣기",
  storageBucket: "여기에_PROJECT_ID.appspot.com",
  messagingSenderId: "여기에_SENDER_ID_붙여넣기",
  appId: "여기에_APP_ID_붙여넣기"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();
