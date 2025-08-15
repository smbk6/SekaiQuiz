// auth.js
// import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";
// import { app } from "./firebase-init.js";

// グローバルなfirebase, firebaseuiを利用
window.addEventListener("DOMContentLoaded", () => {
  const auth = firebase.auth();

  const ui = new firebaseui.auth.AuthUI(auth);

// ユーザーエージェントでiOS端末を判定 iphoneだとpopupが使えないため
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);

  const uiConfig = {
    signInFlow: isIOS ? "redirect" : "popup",
    signInOptions: [
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
      firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccessWithAuthResult: (authResult, redirectUrl) => {
        //console.log("ログイン成功:", authResult.user);
        alert("ログイン成功");
        window.location.href = "main.html"; // 認証後にメイン画面へ
        return false;
      }
    }
  };

  ui.start("#firebaseui-auth-container", uiConfig);
});
