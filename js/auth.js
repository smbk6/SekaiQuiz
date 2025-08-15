// auth.js
// import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";
// import { app } from "./firebase-init.js";

// グローバルなfirebase, firebaseuiを利用
window.addEventListener("DOMContentLoaded", () => {
  const auth = firebase.auth();

  const ui = new firebaseui.auth.AuthUI(auth);

  const uiConfig = {
    signInOptions: [
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
      firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccessWithAuthResult: (authResult, redirectUrl) => {
        window.location.href = "main.html"; // 認証後にメイン画面へ
        console.log("ログイン成功:", authResult.user);
        return false;
      }
    }
  };

  ui.start("#firebaseui-auth-container", uiConfig);
});
